import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const ChartComponent = ({ data }) => {
  const svgRef = useRef();

  useEffect(() => {
    // Set up chart dimensions
    const width = 800;
    const height = 400;
    const margin = { top: 20, right: 30, bottom: 40, left: 40 };

    // Create the SVG element
    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height)
      .style('background-color', '#f0f0f0')
      .style('margin-top', '20px')
      .style('overflow', 'visible');

    
    const xScale = d3.scaleBand()
      .domain(data.map(d => d.year))
      .range([margin.left, width - margin.right])
      .padding(0.1);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data, d => Math.max(d.intensity, d.likelihood, d.relevance))])
      .nice()
      .range([height - margin.bottom, margin.top]);


    svg.append('g')
      .attr('transform', `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(xScale));

    svg.append('g')
      .attr('transform', `translate(${margin.left},0)`)
      .call(d3.axisLeft(yScale));

    const drawBars = (className, color, dataKey) => {
      svg.selectAll(`.${className}`)
        .data(data)
        .enter()
        .append('rect')
        .attr('class', className)
        .attr('x', d => xScale(d.year))
        .attr('y', d => yScale(d[dataKey]))
        .attr('height', d => yScale(0) - yScale(d[dataKey]))
        .attr('width', xScale.bandwidth())
        .attr('fill', color);
    };

    drawBars('intensity-bar', 'rgba(75,192,192,0.6)', 'intensity');
    drawBars('likelihood-bar', 'rgba(192,75,75,0.6)', 'likelihood');
    drawBars('relevance-bar', 'rgba(75,75,192,0.6)', 'relevance');

  }, [data]);

  const legendData = [
    { name: 'Intensity', color: 'rgba(75,192,192,0.6)' },
    { name: 'Likelihood', color: 'rgba(192,75,75,0.6)' },
    { name: 'Relevance', color: 'rgba(75,75,192,0.6)' }
  ];

  return (
    <div style={{ display: 'flex' }}>
      <svg ref={svgRef}></svg>
      <div style={{ marginLeft: '20px' }}>
        <h2>Legend</h2>
        {legendData.map((item, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <div style={{ width: '20px', height: '20px', backgroundColor: item.color, marginRight: '10px' }}></div>
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChartComponent;



