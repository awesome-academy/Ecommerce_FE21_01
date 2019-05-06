import React from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: {}
        }
    }
    componentWillMount() {
        this.getChartData() ;
    }
    getChartData = () => {
        this.setState({
            chartData: {
                labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
                datasets: [
                    {
                        label: 'Population',
                        data: [
                            617594,
                            181045,
                            153060,
                            106519,
                            105162,
                            95072
                        ],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(255, 206, 86, 0.6)',
                            'rgba(75, 192, 192, 0.6)',
                            'rgba(153, 102, 255, 0.6)',
                            'rgba(255, 159, 64, 0.6)',
                            'rgba(255, 99, 132, 0.6)'
                        ]
                    }
                ]
            }
        });
    }
    static defaultProps = {
        displayTitle: true,
        displayLegend: true,
        legendPosition: 'right',
        location: 'City'
    }

    render() {

        var Chart = ({chart}) => {
            switch (chart) {
                case "Bar":
                    return (
                        <>
                            <Bar data={this.state.chartData} options={{
                                title: {
                                    display: 'Danh sach san pham',
                                    text: 'Largest Cities In ' + this.props.location,
                                    fontSize: 25
                                },
                                legend: {
                                    display: this.props.displayLegend,
                                    position: this.props.legendPosition
                                }
                            }} />
                        </>
                    )
                case "Pie":
                    return (
                        <>
                            <Pie data={this.state.chartData} options={{
                                title: {
                                    display: 'Danh sach san pham',
                                    text: 'Largest Cities In ' + this.props.location,
                                    fontSize: 25
                                },
                                legend: {
                                    display: this.props.displayLegend,
                                    position: this.props.legendPosition
                                }
                            }} />
                        </>
                    )
                case "Line":
                    return (
                        <>
                            <Line data={this.state.chartData} options={{
                                title: {
                                    display: 'Danh sach san pham',
                                    text: 'Largest Cities In ' + this.props.location,
                                    fontSize: 25
                                },
                                legend: {
                                    display: this.props.displayLegend,
                                    position: this.props.legendPosition
                                }
                            }} />
                        </>
                    )
                default :
                    return null;
            }
        }

        return(
            <>
                 <Chart chart="Bar" />
            </>
        );
    }
}