<template>
    <div>
        <q-stepper v-model="step" active-color="primary" @finish="etapaCompleta">
            <q-step title="Etapa 1" name="step1" label="Etapa 1" :done="form.step1.completado">
                <q-input v-model="form.step1.data.nome" label="Nome" />
                <q-input v-model="form.step1.data.sobrenome" label="Sobrenome" />
                <q-input v-model="form.step1.data.idade" label="Idade" />
                <q-btn @click="etapaCompleta('step1')">Próximo</q-btn>
            </q-step>

            <q-step title="Etapa 2" name="step2" label="Etapa 2" :done="form.step2.completado">
                <q-input v-model="form.step2.data.rua" label="Rua" />
                <q-input v-model="form.step2.data.numero" label="Número" />
                <q-input v-model="form.step2.data.bairro" label="Bairro" />
                <q-btn @click="etapaCompleta('step2')">Próximo</q-btn>
            </q-step>

            <q-step title="Etapa 3" name="step3" label="Etapa 3" :done="form.step3.completado">
                <q-input v-model="form.step3.data.cidade" label="Cidade" />
                <q-input v-model="form.step3.data.estado" label="Estado" />
                <q-btn @click="etapaCompleta('step3')">Concluir</q-btn>
            </q-step>
        </q-stepper>
    </div>
</template>

<script lang="ts">
import { Form } from '../models/MultiStep';
import { reactive } from 'vue';
export default {
    name: 'MultiStepComponent',
    setup() {
        const form: Form = reactive({
                step1: { completado: false, data: { nome: '', sobrenome: '', idade: '' } },
                step2: { completado: false, data: { rua: '', numero: '', bairro: '' } },
                step3: { completado: false, data: { cidade: '', estado: '' } },
        })

        return { form };
    },
    data() {        
        return {
            step: 'step1',            
        };
    },
    methods: {
        etapaCompleta(nomeDaEtapa: 'step1' | 'step2' | 'step3') {
            this.form[nomeDaEtapa as 'step1' | 'step2' | 'step3'].completado = true;
            this.step = this.proximaEtapa(nomeDaEtapa);
        },
        proximaEtapa(nomeDaEtapa: string | number) {
            if (nomeDaEtapa === 'step1') return 'step2';
            if (nomeDaEtapa === 'step2') return 'step3';
            return 'step1';
        }
    }
}
</script>