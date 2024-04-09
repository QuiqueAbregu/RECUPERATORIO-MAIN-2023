// CONSIGNAS EN ITEM:  🚩
// 1- crear un <li> que tenga su click preparado para ejecutar el metodo heredado para seleccionar la plataforma como favorita
// 2- Presentar el nombre de la plataforma que le llega como prop

// El componente Item:
// ESTADO: Item no necesita manejar un estado.
// MÉTODOS: Item no requiere de métodos.
// PROPS: Item recibe como props el método para modificar la plataforma favorita y su respectivo nombre como contenido.


import React from 'react';

export default function Item(props) {
  const handleItemClick = () => {
    // Llamar al método proporcionado para seleccionar la plataforma como favorita
    props.seleccionarPlataformaFavorita(props.nombrePlataforma);
  };

  return (
    <li onClick={handleItemClick}>
      {/* Presentar el nombre de la plataforma que le llega como prop */}
      {props.nombrePlataforma}
    </li>
  );
}