import React, { Fragment } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

class home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: {}
        }
    }
    componentWillMount() {
        this.getChartData();
    }
    getChartData = () => {
        this.setState({
            chartData: {
                labels: ['2014', '2015', '2016', '2017', '2018', '2019'],
                datasets: [
                    {
                        label: 'Giá Trị',
                        data: [
                            10,
                            40,
                            50,
                            100,
                            200,
                            300
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
    render() {
        var Chart = ({ chart, text }) => {
            switch (chart) {
                case "Bar":
                    return (
                        <>
                            <Bar data={this.state.chartData} options={{
                                title: {
                                    display: true,
                                    text: text,
                                    fontSize: 25,
                                    labels: {
                                        fontColor: 'white',
                                    }
                                },
                                legend: {
                                    display: true,
                                    position: 'right',
                                    labels: {
                                        fontColor: 'white',
                                    }
                                },
                                layout: {
                                    padding: {
                                        left: 10,
                                        right: 0,
                                        bottom: 0,
                                        top: 0,
                                    }
                                }

                            }} />
                        </>
                    )
                case "Pie":
                    return (
                        <>
                            <Pie data={this.state.chartData} options={{
                                title: {
                                    display: true,
                                    text: text,
                                    fontSize: 25,
                                    labels: {
                                        fontColor: 'white',
                                    }
                                },
                                legend: {
                                    display: true,
                                    position: 'right',
                                    labels: {
                                        fontColor: 'white',
                                    }
                                },
                                layout: {
                                    padding: {
                                        left: 10,
                                        right: 0,
                                        bottom: 0,
                                        top: 0,
                                    }
                                }
                            }} />
                        </>
                    )
                case "Line":
                    return (
                        <>
                            <Line data={this.state.chartData} options={{
                                title: {
                                    display: true,
                                    fontSize: 25,
                                    text: text,
                                    labels: {
                                        fontColor: 'white',
                                    }
                                },
                                legend: {
                                    display: true,
                                    position: 'right',
                                    labels: {
                                        fontColor: 'white',
                                    }
                                },
                                layout: {
                                    padding: {
                                        left: 10,
                                        right: 0,
                                        bottom: 0,
                                        top: 0,
                                    }
                                }
                            }} />
                        </>
                    )
                default:
                    return null;
            }
        }
        return (
            <Fragment>

                <div className="row layout">
                    <div className="item">
                        <div className="black">
                            <div className="row">
                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6" >
                                    <img src={require('./../../../assets/images/Admin/user.png')} alt="" />
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                    <h5> User <i className="fas fa-users-cog"></i></h5>
                                    <h5 className="number"> 21</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="black">
                            <div className="row">
                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6" >
                                    <img src={require('./../../../assets/images/Admin/order.png')} alt="" />
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                    <h5> Order <i className="fas fa-users-cog"></i></h5>
                                    <h5 className="number"> 2</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="black">
                            <div className="row">
                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6" >
                                    <img src={require('./../../../assets/images/Admin/product.png')} alt="" />
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                    <h5> Product <i className="fas fa-users-cog"></i></h5>
                                    <h5 className="number"> 3</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="black">
                            <div className="row">
                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6" >
                                    <img src={require('./../../../assets/images/Admin/request.png')} alt="" />
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                    <h5> Category <i className="fas fa-users-cog"></i></h5>
                                    <h5 className="number"> 4</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="black">
                            <div className="row">
                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6" >
                                    <img src={require('./../../../assets/images/Admin/user.png')} alt="" />
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                    <h5> Request <i className="fas fa-users-cog"></i></h5>
                                    <h5 className="number"> 21</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <Chart chart="Bar" text="Biểu Đồ User" />
                    <Chart chart="Pie" text="Biểu Đồ Order" />
                    <Chart chart="Line" text="Biểu Đồ Category" />
                    <Chart chart="Line" text="Biểu Đồ Product" />
                    <Chart chart="Line" text="Biểu Đồ Request" />
                </div>

            </Fragment>
        );
    }
}

export default home;