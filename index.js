class Usuario {
    constructor(nombre,apellido,[libros],[mascotas]){
        this.nombre = nombre,
        this.apellido = apellido,
        this.libros = [libros],
        this.mascotas = [mascotas]
    }

    getFullName(){
        let nombreCompleto = `${this.nombre} ${this.apellido}`;
        console.log(nombreCompleto);
        return nombreCompleto
    }
    addMascota(nuevaMascota){
        this.mascotas.push(nuevaMascota);
    }
    countMascota(){
        let cantidadMascotas = (this.mascotas.length) + 1;
        return cantidadMascotas
    }
    addBook(nombreLibro,autorLibro){
        this.libros.push({
            nombre : nombreLibro,
            autor : autorLibro
        })
    }
    getBookName(){
        let nombreLibros = this.libros.map(item=>item.nombre);
        return nombreLibros
    }
}

const Usuario1 = new Usuario ("Aaron","Rojas",[{nombre:"Nose",autor:"gil"}],["perro","gato"]);

Usuario1.getFullName();
Usuario1.addMascota("conejo");
console.log(Usuario1.countMascota());
Usuario1.addBook("CleanCode","yo");
console.log(Usuario1.getBookName());
console.log(Usuario1.libros)
