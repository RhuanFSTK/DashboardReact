import '../../../node_modules/react-vis/dist/style.css';
/* import '../../../node_modules/chart.js/dist/chart.mjs' */
import { XYPlot, LineSeries, XAxis, VerticalGridLines, HorizontalGridLines } from 'react-vis';

const Chart = () => {
  
  const data = [
    {x:0, y:9},
    {x:1, y:8},
    {x:2, y:3},
    {x:3, y:6},
    {x:4, y:2},
    {x:5, y:5},
    {x:6, y:3},
    {x:7, y:4},
    {x:8, y:5},
  ]

  return(
    <div className={{marginTop: '15px'}}>
      <XYPlot height={100} width={200}>
        <VerticalGridLines/>
        <HorizontalGridLines/>
        {<XAxis/>}
        <LineSeries data={data} color="red"/>
        <LineSeries data={data} color="purlple"/>
        <LineSeries data={data} color="yellow"/>
      </XYPlot>
    </div>
  )
}

export default Chart;