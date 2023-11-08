<template>
    <div>
        <q-input 
            v-model="novaTarefa"
            @keyup.enter="adicionarTarefa"
            placeholder="Adicionar nova tarefa"
        />

        <q-list>
            <q-item
                v-for="tarefa in tarefas"
                :key="tarefa.id"
                clickable
                @click="marcarTarefaComoConcluida(tarefa)"
                :class="{'text-grey-8': tarefa.concluido}"
            >

                <q-item-section>
                    <q-item-label>
                        {{ tarefa.nome }}
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
                        v-if="!tarefa.concluido"
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
                this.tarefas.splice(index, 1);
            }
        }
    }
}
</script>