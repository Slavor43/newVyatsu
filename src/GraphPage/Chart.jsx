import { VictoryChart, VictoryLine, VictoryAxis, VictoryLegend, VictoryLabel, VictoryTheme } from 'victory';

const data = [
  { date: '01.01', score: [4.3, 2.5, 3.5, 4.5] }, // Оценки на 1 месяц
  { date: '01.02', score: [2.5, 4.5, 1.8, 2.9] }, // Оценки на 2 месяц
  { date: '01.03', score: [2, 2, 3, 5] }, // Оценки на 3 месяц
  { date: '01.04', score: [3.4, 3.1, 4, 4.2] }, // Оценки на 4 месяц
];

const colors = ['blue', 'red', 'green', 'purple']; // Цвета для каждого предмета

const Chart = () => (
  <div style={{ display: "flex", alignItems: "end ", width: "80vw" }}>
    <VictoryChart
      domainPadding={20}
      theme={VictoryTheme.material}
    >
      <VictoryAxis
        tickFormat={(x) => (`Месяц ${x}`)}
        style={{
          tickLabels: { fontSize: 8, fill: "#000", fontWeight: "600" },
        }}
      />
      <VictoryAxis
        dependentAxis
        tickFormat={(x) => (`${x}`)}
        style={{
          tickLabels: { fontSize: 8, fill: "#000", fontWeight: "600" },
        }}
      />
      
      {data.map((item, index) => (
        <VictoryLine
          key={index}
          data={item.score.map((score, i) => ({ x: i + 1, y: score }))}
          style={{ data: { stroke: colors[index] } }}
        />
      ))}
      <VictoryLabel
        text="Дата оценок"
        x={400}
        y={380}
        textAnchor="middle"
      />
    </VictoryChart>
    <VictoryLegend x={20} y={20}
        orientation="vertical"
        gutter={10}
        style={{ title: { fontSize: 8 }, labels: {fill: "black"} }}
        data={data.map((d, i) => ({ name: `Предмет ${i + 1}`, symbol: { fill: colors[i], type: "minus"} }))}
      />
  </div>
);

export default Chart;
