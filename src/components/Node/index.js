import React, { useEffect, useState } from 'react';
import node from './data.js';
import G6 from '@antv/g6';
export default function () {
  const percent = [0.7, 0.9];
  const ref = React.useRef(null);
  let graph = null;
  const lineDash = [4, 2, 1, 2];

  G6.registerNode('breath-node', {
    draw: (cfg, group) => {
      console.log(cfg, group);
    },
    afterDraw: function afterDraw(cfg, group) {
      var r = cfg.size * 20;
      console.log(cfg, group);
      var back1 = group.addShape('circle', {
        zIndex: -3,
        attrs: {
          x: 0,
          y: 0,
          r: r,
          fill: cfg.color || cfg.style && cfg.style.fill,
          opacity: 0.6
        }
      });
      var back2 = group.addShape('circle', {
        zIndex: -2,
        attrs: {
          x: 0,
          y: 0,
          r: r,
          fill: cfg.color,
          // 为了显示清晰，随意设置了颜色
          opacity: 0.6
        }
      });
      var back3 = group.addShape('circle', {
        zIndex: -1,
        attrs: {
          x: 0,
          y: 0,
          r: r,
          fill: cfg.color,
          opacity: 0.6
        }
      });
      group.sort(); // 排序，根据zIndex 排序
      var delayBase = Math.random() * 2000;
      back1.animate({ // 逐渐放大，并消失
        r: r + 10,
        opacity: 0.0,
        repeat: true // 循环
      }, 3000, 'easeCubic', null, delayBase); // 无延迟
      back2.animate({ // 逐渐放大，并消失
        r: r + 10,
        opacity: 0.0,
        repeat: true // 循环
      }, 3000, 'easeCubic', null, delayBase + 1000); // 1 秒延迟
      back3.animate({ // 逐渐放大，并消失
        r: r + 10,
        opacity: 0.0,
        repeat: true // 循环
      }, 3000, 'easeCubic', null, delayBase + 2000); // 2 秒延迟
    }
  }, 'circle');

  // custom the edge
  G6.registerEdge('running-polyline', {
    // 绘制不同颜色的线条
    // draw(cfg, group) {
    //   const startPoint = cfg.startPoint;
    //   const endPoint = cfg.endPoint;
    //   const stroke = (cfg.style && cfg.style.stroke) || this.options.style.stroke;
    //   const startArrow = (cfg.style && cfg.style.startArrow) || undefined;
    //   const endArrow = (cfg.style && cfg.style.endArrow) || undefined;

    //   const keyShape = group.addShape('path', {
    //     attrs: {
    //       path: [
    //         ['M', startPoint.x, startPoint.y],
    //         // ['L', endPoint.x / 3 + (2 / 3) * startPoint.x, startPoint.y],
    //         // ['L', endPoint.x / 3 + (2 / 3) * startPoint.x, endPoint.y],
    //         ['L', endPoint.x, endPoint.y],
    //       ],
    //       stroke,
    //       lineWidth: 1,
    //       startArrow,
    //       endArrow,
    //     },
    //     className: 'edge-shape',
    //     name: 'edge-shape',
    //   });
    //   return keyShape;
    // },
    // 动画
    afterDraw(cfg, group) {
      const shape = group.get('children')[0];
      if (cfg.calc) {
        const path = shape.getPoint(0);
        const path1 = shape.getPoint(0.5);
        const path2 = shape.getPoint(0.8);
        const path3 = shape.getPoint(1);
        group.addShape('path', {
          attrs: {
            path: [
              ['M', path.x, path.y],
              ['L', path1.x, path1.y],
            ],
            fill: '#ff0000',
            stroke: '#ff0000',
            lineWidth: 5,
          },
        });
        group.addShape('path', {
          attrs: {
            path: [
              ['M', path1.x, path1.y],
              ['L', path2.x, path2.y],
            ],
            fill: '#FFFF00',
            stroke: '#FFFF00',
            lineWidth: 5,
          },
        });
        group.addShape('path', {
          attrs: {
            path: [
              ['M', path2.x, path2.y],
              ['L', path3.x, path3.y],
            ],
            stroke: '#00ff00',
            fill: '#00ff00',
            lineWidth: 5,
          },
        });
      }
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
        height: 500,
        defaultNode: {
          shape: 'breath-node',
          size: 30,
          style: {
            lineWidth: 0,
            fill: 'rgb(240, 223, 83)'
          }
        },
        defaultEdge: {
          type: 'running-polyline',
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
    graph.render();
  }, []);
  return <div ref={ref}></div>;
}