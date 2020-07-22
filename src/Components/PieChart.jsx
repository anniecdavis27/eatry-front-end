import { Pie } from 'react-chartjs-2'
import React, {Component} from 'react'
import { render } from '@testing-library/react'

class PieChartComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            labels: ['Fat', 'Protein', 'Carbs'],
            datasets: [{
                data: [props.totalFat, props.totalProtein, props.totalCarbs],
                backgroundColor: ['#ff0000', '#ff9e9e', '#a60000']
            }]
        }
    }

    render() {
        return (
            <div className='piechart'>
                <Pie
                data={{
                    labels: this.state.labels,
                    datasets: this.state.datasets
                }}
                height='200px'
                />
            </div>
        )
    }
}

export default PieChartComponent

