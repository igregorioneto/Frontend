<template>
    <div>
        <q-input 
            v-model="novaTarefa"
            @keyup.enter="adicionarTarefa"
            placeholder="Adicionar nova tarefa"
        />
    </div>
</template>

<script lang="ts">
import { Tarefa } from '../models/Tarefa';
export default {
    name: 'TodoList',
    data() {        
        return {
            novaTarefa: '',
            tarefas: [
                { id: 1, nome: 'Tarefa 1', concluido: false },
                { id: 1, nome: 'Tarefa 2', concluido: true },
            ] as Tarefa[],
        };
    },
    methods: {
        adicionarTarefa() {
            if (this.novaTarefa.trim() === '') return;
            const novaTarefa: Tarefa = {
                id: Date.now(),
                nome: this.novaTarefa,
                concluido: false
            };
            this.tarefas.push(novaTarefa);
            this.novaTarefa = '';
        },
        marcarTarefaComoConcluida(tarefa: Tarefa) {
            tarefa.concluido = !tarefa.concluido;
        },
        removerTarefa(tarefa: Tarefa) {
            const index = this.tarefas.findIndex((item: Tarefa) => item.id == tarefa.id);
            if (index !== -1) {
                this.tarefas.slice(index, 1);
            }
        }
    }
}
</script>