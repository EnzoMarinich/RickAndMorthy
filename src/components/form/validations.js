

export const validation = (data)=>{
    const errors = {}

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!data.email || !regex.test(data.email)){ errors.email="Necesita un email valido" }
    if (data.password.length > 10 || data.password.length < 6 ) {errors.password="minimo 6 caracteres y maximo 10, al menos un numero"}

    return errors
}