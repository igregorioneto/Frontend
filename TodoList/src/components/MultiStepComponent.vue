<template>
    <div>
        <q-stepper v-model="step" active-color="primary" @finish="etapaCompleta">
            <q-step title="Etapa 1" name="step1" label="Etapa 1" :done="stap1Completado">
                <InputComponent 
                    v-model="nome" 
                    label="Nome" 
                />
                <InputComponent 
                    v-model="sobrenome" 
                    label="Sobrenome"  
                />
                <InputComponent 
                    v-model="idade" 
                    label="Idade"
                />
                <q-btn @click="etapaCompleta('step1')">Próximo</q-btn>
            </q-step>

            <q-step title="Etapa 2" name="step2" label="Etapa 2" :done="stap2Completado">
                <InputComponent 
                    v-model="rua" 
                    label="Rua"
                />
                <InputComponent 
                    v-model="numero" 
                    label="Número"
                />
                <InputComponent 
                    v-model="bairro" 
                    label="Bairro"
                />
                <q-btn @click="etapaCompleta('step2')">Próximo</q-btn>
            </q-step>

            <q-step title="Etapa 3" name="step3" label="Etapa 3" :done="stap3Completado">
                <InputComponent 
                    v-model="cidade" 
                    label="Cidade"                    
                />
                <InputComponent 
                    v-model="estado" 
                    label="Estado"                     
                />
                <q-btn @click="etapaCompleta('step3')">Concluir</q-btn>
            </q-step>
        </q-stepper>

        <q-table
            :rows="tarefas"
            :columns="colunas"
        >
            <template v-slot:body-cell-acoes="props">
                <q-td :props="props">
                <q-btn color="primary">OK</q-btn>
                </q-td>
            </template>
        </q-table>
    </div>
</template>

<script lang="ts">
import { Form } from '../models/MultiStep';
import InputComponent from './InputComponent.vue';

export default {
    components: {
        InputComponent,
    },
    name: 'MultiStepComponent',
    data() {        
        return {
            step: 'step1', 
            tarefas: [] as Form[],
            nome: '',
            sobrenome: '',
            idade: '',
            rua: '',
            numero: '',
            bairro: '',
            cidade: '',
            estado: '',
            stap1Completado: false,
            stap2Completado: false,
            stap3Completado: false,
            colunas:[
                { name: 'nome', required: true, label: 'Nome', align: 'center', field: 'nome' },
                { name: 'sobrenome', required: true, label: 'Sobrenome', align: 'center', field: 'sobrenome' },
                { name: 'idade', required: true, label: 'Idade', align: 'center', field: 'idade' },
                { name: 'rua', required: true, label: 'Rua', align: 'center', field: 'rua' },
                { name: 'numero', required: true, label: 'Número', align: 'center', field: 'numero' },
                { name: 'bairro', required: true, label: 'Bairro', align: 'center', field: 'bairro' },
                { name: 'cidade', required: true, label: 'Cidade', align: 'center', field: 'cidade' },
                { name: 'estado', required: true, label: 'Estado', align: 'center', field: 'estado' },
                { name: 'acoes', required: true, label: 'Ações', align: 'center', field: 'acoes' },
            ]  
        };
    },
    methods: {
        etapaCompleta(nomeDaEtapa: 'step1' | 'step2' | 'step3') {            

            if(nomeDaEtapa === 'step1') {
                if (this.nome === '' || this.sobrenome === '' || this.idade === '') return;
                this.stap1Completado = true;
            }

            if(nomeDaEtapa === 'step2') {
                if (this.rua === '' || this.numero === '' || this.bairro === '') return;
                this.stap2Completado = true;
            }

            if(nomeDaEtapa === 'step3') {
                if (this.cidade === '' || this.estado === '') return;
                this.stap3Completado = true;
            }
            
            this.step = this.proximaEtapa(nomeDaEtapa);
        },
        proximaEtapa(nomeDaEtapa: string | number) {
            if (nomeDaEtapa === 'step1') return 'step2';
            
            if (nomeDaEtapa === 'step2') return 'step3';
            
            if (nomeDaEtapa === 'step3') {
                this.inserindoDadosFormulario();  
                this.limparFormulario();             
            }            
            return 'step1';
        },
        limparFormulario() {
            this.stap1Completado = false;
            this.idade = '';
            this.nome = '';
            this.sobrenome = '';

            this.stap2Completado = false;
            this.bairro = '';
            this.numero = '';
            this.rua = '';

            this.stap3Completado = false;
            this.cidade = '';
            this.estado = '';
        },
        inserindoDadosFormulario() {
            let dadosConsolidados = this.consolidarDadosFormulario();

            this.tarefas.push(dadosConsolidados);
        },
        consolidarDadosFormulario() {
            return {
                nome: this.nome,
                sobrenome: this.sobrenome,
                idade: this.idade,
                rua: this.rua,
                numero: this.numero,
                bairro: this.bairro,
                cidade: this.cidade,
                estado: this.estado,
            };
        }
    }
}
</script>