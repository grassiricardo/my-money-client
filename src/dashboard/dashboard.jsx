import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getSummary } from './dashboardActions'
import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import ValueBox from '../common/widget/valueBox'
import Row from '../common/layout/row'

class Dashboard extends Component {

    componentWillMount() {
        this.props.getSummary
    }

    render() {
        const { credit, debt } = this.props.sumary
        return (
            <div>
                <ContentHeader title='Dashboard' small='Versao 1.0' />
                <Content>
                    <Row>
                        <ValueBox cols='12 4' color='green' icon='bank'
                            value={`R$ ${credit}`} text='Total de Creditos' />
                        <ValueBox cols='12 4' color='red' icon='credit-card'
                            value={`R$ ${debt}`}  text='Total de Debitos' />
                        <ValueBox cols='12 4' color='blue' icon='money'
                            value={`R$ ${credit - debt}`}  text='Valor Consolidado' />
                    </Row>
                </Content>
            </div>
        )
    }
}

//Mapeamento que irá sempre me retornar o estado atual do meu dashboard atraves do seu reducer
const mapStateToProps = state => ({sumary: state.dashboard.summary})
//Mapeamento que irá sempre que eu usar as actions do meu dashboard, dispachar todas as alteracoes de estado para todas as actions que estiverem
//interessadas a esta acao, evoluindo assim o estado do meu dasboard
const mapDispatchToProps = dispatch => bindActionCreators({getSummary}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)