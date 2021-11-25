//definiremos la estructura de la tabla usuario que ocuparemos en BD
import {Schema, Document, model} from 'mongoose';

const estructuraComunidad = new Schema({
    nombreComunidad:
    {
        type: String,
        unique: true,
        required: [true, 'El nombre de la comunidad es obligatorio'],
        default: 'Comunidad VeciRed'
    },
    descripcion:{
        type: String,
        required: [true, 'La descripción de la comunidad es obligatoria'],
        default: 'Comunidad inicial administrada por los creadores de veciRed'
    },
    coordenadas: {
        type: String
    }
});

interface IComunidad extends Document {
    nombreComunidad: string;
    descripcion: string;
    coordenadas: string;
}

export const Comunidad = model<IComunidad>('Comunidad', estructuraComunidad);