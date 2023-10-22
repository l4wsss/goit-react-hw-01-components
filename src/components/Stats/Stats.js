import {StatisticsSection, StatisticsTitle, StatisticsList, StatisticsItem, StatisticsLabel, StatisticsPercentage} from "./Stats.styled"

function randomColor() {
    return (
      '#' +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)
    );
  }

export const Stats = ({title, stats}) => {
    return (
    <StatisticsSection>
        {title && <StatisticsTitle>{title}</StatisticsTitle>}

        <StatisticsList>
        {stats.map(({ id, label, percentage }) => (
          <StatisticsItem key={id} color={randomColor()}>
            <StatisticsLabel> {label} </StatisticsLabel>
            <StatisticsPercentage> {percentage}% </StatisticsPercentage>
          </StatisticsItem>
        ))}
      </StatisticsList>
    
    </StatisticsSection>
    )
}