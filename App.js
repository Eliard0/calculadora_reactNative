import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native';
import Botao from './src/Botao'
import Tela from './src/Tela'

const estadoInicial = {
  valorTela: '0',
  limpar:false,
  operacao:null,
  valores: [0,0],
  indicador: 0,
}

export default class App extends Component {
  state = { ...estadoInicial }

  adicionarDigito = n => {
    const limpar = this.state.valorTela === '0' || this.state.limpar

    if(n ==='.' && !limpar && this.state.valorTela.includes('.')){
      return
    }

    const valorCorrente = limpar ? '' : this.state.valorTela
    const valorTela = valorCorrente + n
    this.setState({valorTela, limpar:false})

    if(n !== '.'){
      const novoValor = parseFloat(valorTela)
      const valores = [...this.state.valores]
      valores[this.state.indicador] = novoValor
      this.setState({valores})
    }
  }

  limparTela = () => {
    this.setState({ ...estadoInicial})
  } 

  setOperacao = operacao => {
    if(this.state.indicador === 0){
      this.setState({ operacao, indicador: 1, limpar: true})
    }else {
      const igual = operacao = '='
      const valores = [...this.state.valores]
      try {
        valores[0] = 
        eval(`${valores[0]} ${this.state.operacao} ${valores[1]}`)
      }catch (e){
        valores[0] = this.state.valores[0]
      }

      valores[1] = 0
      this.setState({
        valorTela: `${valores[0]}`,
        operacao: igual ? null : operacao,
        indicador: igual ? 0 : 1,
        limpar: !igual,
        valores,
      })
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Tela value={this.state.valorTela}/>
        <View style={styles.botoes}>
          <Botao label='AC' tres operacao onClick={this.limparTela}/>
          <Botao label='/' operacao onClick={()=>this.setOperacao('/')}/>
          <Botao label='7' onClick={()=>this.adicionarDigito(7)}/>
          <Botao label='8' onClick={()=>this.adicionarDigito(8)}/>
          <Botao label='9' onClick={()=>this.adicionarDigito(9)}/>
          <Botao label='*' operacao onClick={()=>this.setOperacao('*')}/>
          <Botao label='4' onClick={()=>this.adicionarDigito(4)}/>
          <Botao label='5' onClick={()=>this.adicionarDigito(5)}/>
          <Botao label='6' onClick={()=>this.adicionarDigito(6)}/>
          <Botao label='-' operacao onClick={()=> this.setOperacao('-')}/>
          <Botao label='1' onClick={()=>this.adicionarDigito(1)}/>
          <Botao label='2' onClick={()=>this.adicionarDigito(2)}/>
          <Botao label='3' onClick={()=>this.adicionarDigito(3)}/>
          <Botao label='+' operacao onClick={()=>this.setOperacao('+')}/>
          <Botao label='0' duas onClick={()=>this.adicionarDigito('0')}/>
          <Botao label='.' onClick={()=>this.adicionarDigito('.')}/>
          <Botao label='=' operacao onClick={()=>this.setOperacao('=')}/>
        </View>
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  botoes: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
