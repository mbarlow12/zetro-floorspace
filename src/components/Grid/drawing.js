import _ from 'lodash';
import { distanceBetweenPoints, unitPerpVector } from './../../store/modules/geometry/helpers';

export function drawWindow() {
  let
    xScale = _.identity,
    yScale = _.identity,
    highlight = false;
  function chart(selection) {
    selection.exit().remove();
    const windowE = selection.enter().append('g').attr('class', 'window');
    windowE.append('line');
    windowE.append('circle');
    const windw = selection.merge(windowE);
    windw.select('line')
      .attr('x1', d => xScale(d.start.x))
      .attr('y1', d => yScale(d.start.y))
      .attr('x2', d => xScale(d.end.x))
      .attr('y2', d => yScale(d.end.y))
      .attr('marker-end', `url(#perp-linecap${highlight ? '-highlight' : ''})`)
      .attr('marker-start', `url(#perp-linecap${highlight ? '-highlight' : ''})`);
    windw.select('circle')
      .attr('cx', d => xScale(d.center.x))
      .attr('cy', d => yScale(d.center.y))
      .attr('r', '2');
  }

  chart.xScale = function (_) {
    if (!arguments.length) return xScale;
    xScale = _;
    return chart;
  };
  chart.yScale = function (_) {
    if (!arguments.length) return yScale;
    yScale = _;
    return chart;
  };
  chart.highlight = function(_) {
    if (!arguments.length) return highlight;
    highlight = _;
    return chart;
  };

  return chart;
}

export function drawWindowGuideline() {
  let
    xScale = _.identity,
    yScale = _.identity;
  function chart(selection) {
    selection.exit().remove();
    const labelE = selection.enter().append('g')
        .attr('class', 'window-guideline')
        .attr('transform', (d) => {
          const { dx, dy } = unitPerpVector(d.edge_start, d.center),
            offset = 20,
            offX = offset * dx,
            offY = offset * dy;
          return `translate(${offX}, ${offY})`;
        });
    labelE.append('line');
    labelE.append('text');
    const label = selection.merge(labelE);
    label.select('text')
      .attr('x', d => xScale(d.center.x))
      .attr('y', d => yScale(d.center.y))
      .attr('fill', 'red')
      .text((d) => {
        const
          distance = distanceBetweenPoints(d.edge_start, d.center),
          roundDistance = Math.round(distance * 100) / 100;
        return `${roundDistance}`;
      });
    label.select('line')
      .attr('x1', d => xScale(d.edge_start.x))
      .attr('y1', d => yScale(d.edge_start.y))
      .attr('x2', d => xScale(d.center.x))
      .attr('y2', d => yScale(d.center.y))
      .attr('marker-start', 'url(#red-arrowhead-left)')
      .attr('marker-end', 'url(#red-arrowhead-right)')
      .attr('stroke-width', 2)
      .attr('stroke', '#ff0000')
      .attr('stroke-dasharray', (d) => {
        const
          pxStart = {
            x: xScale(d.edge_start.x),
            y: yScale(d.edge_start.y),
          },
          pxCenter = {
            x: xScale(d.center.x),
            y: yScale(d.center.y),
          },
          pxDist = distanceBetweenPoints(pxStart, pxCenter);
        return `0, 11.5, ${pxDist - 23}, 11.5`;
      });
  }

  chart.xScale = function (_) {
    if (!arguments.length) return xScale;
    xScale = _;
    return chart;
  };
  chart.yScale = function (_) {
    if (!arguments.length) return yScale;
    yScale = _;
    return chart;
  };
  return chart;
}


export function drawDaylightingControl() {
  let
    xScale = _.identity,
    yScale = _.identity;

  function chart(selection) {
    selection.exit().remove();
    const dcE = selection.enter().append('g').attr('class', 'daylighting-control');
    dcE.append('circle').attr('class', 'bg');
    dcE.append('path').attr('class', 'quadrants');
    const dc = selection.merge(dcE);
    dc.select('circle.bg')
      .attr('cx', d => xScale(d.x))
      .attr('cy', d => yScale(d.y))
      .attr('r', 10);
    dc.select('path.quadrants')
      .attr('d', (d) => {
        const x = xScale(d.x), y = yScale(d.y), r = 10;
        return `M${x} ${y} L${x + r} ${y} A ${r} ${r} 0 0 1 ${x} ${y + r} L ${x} ${y - r} A ${r} ${r} 0 0 0 ${x - r} ${y} Z`;
      });
  }

  chart.xScale = function (_) {
    if (!arguments.length) return xScale;
    xScale = _;
    return chart;
  };
  chart.yScale = function (_) {
    if (!arguments.length) return yScale;
    yScale = _;
    return chart;
  };
  return chart;
}

export function drawDaylightingControlGuideline() {
  let
    xScale = _.identity,
    yScale = _.identity;
  function chart(selection) {
    selection.exit().remove();
    selection
      .merge(selection.enter().append('text').attr('class', 'daylighting-control-guideline'))
      .attr('x', d => xScale(d.start.x))
      .attr('y', d => yScale(d.start.y))
      .text('gonna put a daylighting control here');
  }

  chart.xScale = function (_) {
    if (!arguments.length) return xScale;
    xScale = _;
    return chart;
  };
  chart.yScale = function (_) {
    if (!arguments.length) return yScale;
    yScale = _;
    return chart;
  };
  return chart;
}
