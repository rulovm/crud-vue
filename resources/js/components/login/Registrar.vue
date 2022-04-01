<template>
    <v-container>
        <v-card elevation="16" color="grey lighten-3" >
            <v-card-text dark>
                <h2>Registro nuevo usuario</h2>
                <form @submit.prevent="submit">
                    <v-text-field
                    v-model="nombreC"
                    :counter="10"
                    label="Nombre Completo"
                    required
                    ></v-text-field>
                    <v-text-field
                    v-model="noTelefono"
                    :counter="7"
                    label="Número de teléfono"
                    required
                    ></v-text-field>

                    <v-text-field
                    v-model="correo"
                    label="Correo Electrónico"
                    required
                    ></v-text-field>

                    <v-text-field
                    v-model="password"
                    label="Contraseña"
                    required
                    ></v-text-field>

                    <v-btn
                        class="mr-4"
                        type="submit"
                        :disabled="invalid"
                    >
                        Crear
                    </v-btn>
                    <v-btn @click="clear">
                        Limpiar
                    </v-btn>
                </form>
            </v-card-text>
        </v-card>
    </v-container>
</template>
<script>
  export default {
    data: () => ({
      nombreC: '',
      noTelefono: '',
      correo: '',
      password: ''
    }),

    methods: {
      submit () {
        this.$refs.observer.validate()
      },
      clear () {
        this.nombreC = ''
        this.noTelefono = ''
        this.correo = ''
        this.password = ''
        this.$refs.observer.reset()
      },
    },
  }
</script>