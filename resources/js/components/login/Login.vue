<template>
<div>
    <v-container>
        <v-card elevation="16" color="grey lighten-3" >
            <v-card-text dark>
                <v-row>
                    <v-col class="text-center" cols="12">
                        <img  width="150" v-bind:src="'/img/login.jpg'"/>
                    </v-col>
                
                    <v-col class="text-center" cols="12">
                        <v-toolbar-title>Iniciar Sesión</v-toolbar-title>
                        <v-form
                            ref="form"
                            v-model="valid"
                            lazy-validation
                            @submit.prevent="submit"
                        >
                            <v-text-field
                            v-model="correo"
                            :rules="correoRules"
                            label="Correo electrónico"
                            required
                            ></v-text-field>

                            <v-text-field
                            v-model="password"
                            :rules="passRules"
                            label="Contraseña"
                            required
                            ></v-text-field>

                            <v-btn
                            color="success"
                            class="mr-4"
                            type="submit"
                            >
                            Guardar
                            </v-btn>
                            <v-btn
                            color="secondary"
                            class="mr-4"
                            to="/registrar"
                            >
                            Registrar
                            </v-btn>
                        </v-form>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
    </v-container>
</div>
</template>
<script>
export default {
    data: () => ({
        valid: false,
        correo: '',
        password: '',
        correoRules: [
            v => !!v || 'Correo es requerido',
            v => /.+@.+\..+/.test(v) || 'Correo invalido',
        ],
        passRules: [
            v => !!v || 'Contraseña es requerido'
        ],
    }),
    methods: {
        submit () {
            alert('Inicio sesión');    
        },
    }
};
</script>

<style></style>
