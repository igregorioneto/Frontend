<template>
    <div>
        <q-input 
            v-model="novaTarefa"
            @keyup.enter="adicionarTarefa"
            placeholder="Adicionar nova tarefa"
            :rules="[val => (val && val.length > 0) || 'Este campo é obrigatório!']"
        />

        <q-input 
            v-model="novaDescricao"
            @keyup.enter="adicionarTarefa"
            placeholder="Adicionar descrição da tarefa"
            :rules="[val => (val && val.length > 0) || 'Este campo é obrigatório!']"
        />

        <q-list>
            <q-item
                v-for="tarefa in tarefas"
                :key="tarefa.id"
                clickable
                @click="marcarTarefaComoConcluida(tarefa)"
                :class="{'text-grey-8': tarefa.concluida}"
            >

                <q-item-section>
                    <q-item-label>
                        Título: {{ tarefa.nome }}
                    </q-item-label>
                    <q-item-label caption>
                        Descrição: {{  tarefa.descricao  }}
                    </q-item-label>
                </q-item-section>

                <q-item-section side>
                    <div class="q-item-section">
                        <q-btn 
                        dense
                        flat
                        round
                        icon="done"
                        color="positive"
                        @click="marcarTarefaComoConcluida(tarefa)"
                        v-if="!tarefa.concluida"
                        />

                        <q-btn 
                            dense
                            flat
                            round
                            icon="delete"
                            color="negative"
                            @click="removerTarefa(tarefa)"
                        />
                    </div>
                </q-item-section>

            </q-item>
        </q-list>
    </div>
</template>

<script lang="ts">
import { Tarefa } from '../models/Tarefa';
export default {
    name: 'TodoList',
    data() {        
        return {
            tarefaCadastrada: false,
            novaTarefa: '',
            novaDescricao: '',
            tarefas: [
                { id: 1, nome: 'Tarefa 1', descricao: 'Descrição da Tarefa 1', concluida: false },
                { id: 1, nome: 'Tarefa 2', descricao: 'Descrição da Tarefa 2', concluida: true },
            ] as Tarefa[],
        };
    },
    methods: {
        adicionarTarefa() {
            if (this.novaTarefa.trim() === '' || this.novaDescricao.trim() === '') return;

            if (this.novaTarefa && this.novaDescricao) {                
                const novaTarefa: Tarefa = {
                    id: Date.now(),
                    nome: this.novaTarefa,
                    descricao: this.novaDescricao,
                    concluida: false
                };
                this.tarefas.push(novaTarefa);
                this.limpandoCampos();
            }
        },
        marcarTarefaComoConcluida(tarefa: Tarefa) {
            tarefa.concluida = !tarefa.concluida;
        },
        removerTarefa(tarefa: Tarefa) {
            const index = this.tarefas.findIndex((item: Tarefa) => item.id == tarefa.id);
            if (index !== -1) {
                this.tarefas.splice(index, 1);
            }
        },
        limpandoCampos() {
            this.novaTarefa = '';
            this.novaDescricao = '';
        }
    }
}
</script>