import React, { useEffect, useState } from 'react';
import node from './data.js';
import G6 from '@antv/g6';
export default function () {
  const percent = [7, 2, 1];//一直要保证三个数之和为10；而且要根据顺序来，第一个表示红，第二个是，第三个是，这样才能和下面对上
  const ref = React.useRef(null);
  let graph = null;
  const lineDash = [4, 2, 1, 2];
  const getPointByLine = (startPoint, endPoint, percent = []) => {
    // 利用percent求分割点，即所有线段分为3段 ，6个点
    if (percent.length < 3) {
      return false;
    }
    let sum = percent[0] + percent[1] + percent[2];
    if (sum != 10) {
      return false;
    }
    let point1 = new Array(2), point2 = new Array(2);
    if (startPoint.x == endPoint.x && startPoint.y == endPoint.y) {
      // 两个点重合了，那就没必要分段了
      return false;
    }

    if (startPoint.x == endPoint.x) {
      // x轴相等，则point1，point2的x肯定相等，只是需要计算y轴的距离
      point1[0] = startPoint.x;
      point2[0] = startPoint.x;
      let yDis = endPoint.y - startPoint.y;
      point1[1] = Math.floor((yDis / 10) * percent[0] + startPoint.y)
      point2[1] = Math.floor((yDis / 10) * percent[1] + point1[1])
    }
    if (startPoint.y == endPoint.y) {
      // y轴相等，则point1，point2的y肯定相等，只是需要计算x轴的距离
      let xDis = endPoint.x - startPoint.x;
      point1[0] = Math.floor((xDis / 10) * percent[0] + startPoint.x)
      point2[0] = Math.floor((xDis / 10) * percent[1] + point1[0])

      point1[1] = startPoint.y;
      point2[1] = startPoint.y;
    }
    if (startPoint.x !== endPoint.x && startPoint.y !== endPoint.y) {
      let x = (startPoint.x + endPoint.x) / 10;
      let y = (startPoint.y + endPoint.y) / 10;
      point1[0] = Math.floor(x * percent[0]);
      point1[1] = Math.floor(y * percent[0]);
      point2[0] = Math.floor(x * (percent[0] + percent[1]));
      point2[1] = Math.floor(y * (percent[0] + percent[1]));
    }
    return [[startPoint.x, startPoint.y], point1, point2, [endPoint.x, endPoint.y]]
  }
  //warning ,abnormal
  const colors = ['#ff0000', '#00ff00']

  G6.registerNode('breath-node', {
    afterDraw(cfg, group) {
      if (!cfg.name) {
        return;
      }
      let r = cfg.size / 2;
      if (isNaN(r)) {
        r = cfg.size[0] / 2;
      }
      let color = '';
      if (cfg.name == 'warning') {
        color = colors[0];
      }
      if (cfg.name == 'abnormal') {
        color = colors[1];
      }
      // 第一个背景圆
      const back1 = group.addShape('circle', {
        zIndex: -3,
        attrs: {
          x: 0,
          y: 0,
          r,
          fill: color,
          opacity: 0.6,
        },
        // must be assigned in G6 3.3 and later versions. it can be any value you want
        name: 'circle-shape1',
      });
      // 第二个背景圆
      const back2 = group.addShape('circle', {
        zIndex: -2,
        attrs: {
          x: 0,
          y: 0,
          r,
          fill: color, // 为了显示清晰，随意设置了颜色
          opacity: 0.6,
        },
        // must be assigned in G6 3.3 and later versions. it can be any value you want
        name: 'circle-shape2',
      });
      // 第三个背景圆
      const back3 = group.addShape('circle', {
        zIndex: -1,
        attrs: {
          x: 0,
          y: 0,
          r,
          fill: color,
          opacity: 0.6,
        },
        // must be assigned in G6 3.3 and later versions. it can be any value you want
        name: 'circle-shape3',
      });
      group.sort(); // 排序，根据 zIndex 排序

      // 第一个背景圆逐渐放大，并消失
      back1.animate(
        {
          r: r + 10,
          opacity: 0.1,
        },
        {
          repeat: true, // 循环
          duration: 3000,
          easing: 'easeCubic',
          delay: 0, // 无延迟
        },
      );

      // 第二个背景圆逐渐放大，并消失
      back2.animate(
        {
          r: r + 10,
          opacity: 0.1,
        },
        {
          repeat: true, // 循环
          duration: 3000,
          easing: 'easeCubic',
          delay: 1000, // 1 秒延迟
        },
      ); // 1 秒延迟

      // 第三个背景圆逐渐放大，并消失
      back3.animate(
        {
          r: r + 10,
          opacity: 0.1,
        },
        {
          repeat: true, // 循环
          duration: 3000,
          easing: 'easeCubic',
          delay: 2000, // 2 秒延迟
        },
      );
    },
  }, 'circle');

  // custom the edge
  G6.registerEdge('running-polyline', {
    // 绘制不同颜色的线条
    draw(cfg, group) {
      const startPoint = cfg.startPoint;
      const endPoint = cfg.endPoint;
      let line1, line2, line3;
      if (cfg.calc) {
        let _p = getPointByLine(startPoint, endPoint, percent);
        if (_p && _p.length == 4) {
          line1 = group.addShape('path', {
            attrs: {
              path: [
                ['M', _p[0][0], _p[0][1]],
                ['L', _p[1][0], _p[1][1]],
              ],
              fill: '#ff0000',
              stroke: '#ff0000',
              lineWidth: 4,
            },
          });
          line2 = group.addShape('path', {
            attrs: {
              path: [
                ['M', _p[1][0], _p[1][1]],
                ['L', _p[2][0], _p[2][1]],
              ],
              fill: '#FFFF00',
              stroke: '#FFFF00',
              lineWidth: 4,
            },
          });
          line3 = group.addShape('path', {
            attrs: {
              path: [
                ['M', _p[2][0], _p[2][1]],
                ['L', _p[3][0], _p[3][1]],
              ],
              stroke: '#00FF00',
              fill: '#00FF00',
              lineWidth: 4,
            },
          });
        }
      }
      if (!line1) {
        // 如果没有计算的话，就直接绘制一条直线
        line1 = group.addShape('path', {
          attrs: {
            path: [
              ['M', startPoint.x, startPoint.y],
              ['L', endPoint.x, endPoint.y],
            ],
            fill: '#ff0000',
            stroke: '#ff0000',
            lineWidth: 4,
          },
        });
      }
      return line1;
    },
    // 动画
    afterDraw(cfg, group) {
      const shape = group.get('children')[0];
      if (cfg.isrunning) {
        let index = 0;
        // Define the animation
        shape.animate(
          () => {
            index++;
            if (index > 9) {
              index = 0;
            }
            const res = {
              lineDash,
              lineDashOffset: -index,
            };
            // returns the modified configurations here, lineDash and lineDashOffset here
            return res;
          },
          {
            repeat: true, // whether executes the animation repeatly
            duration: 3000, // the duration for executing once
          },
        );
      }
    },
  }, 'line');

  useEffect(() => {
    if (!graph) {
      graph = new G6.Graph({
        container: ref.current,
        width: 550,
        height: 550,
        defaultNode: {
          type: 'breath-node',
          size: 35,
          color: "#40a9ff",
          labelCfg: {
            position: 'center',//位置，上下左右
            offset: 10,
            style: {
              fill: "#333", //文本的颜色
              fontSize: 10,
            }
          },
          style: {
            fill: "yellow"
          }
        },
        defaultEdge: {
          type: 'running-polyline',
          // zIndex:-3,
          size: 5,
          style: {
            opacity: 0.4,
            lineAppendWidth: 1
          }
        }
      });
    }
    graph.data(node);
    graph.on('edge:click', evt => {
      const edge = evt.item;
      const model = edge.getModel();
      model.color = "#ff0000"
      edge.update(model)
    })
    graph.on('node:click', evt => {
      const node = evt.item;
      const model = node.getModel();
      alert('你是否需要深度分析 ' + model.label.replaceAll('\n','') + ' 节点?')
    })
    graph.render();
  }, []);
  return <div ref={ref}></div>;
}