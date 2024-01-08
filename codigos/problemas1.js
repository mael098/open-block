// La función rgb está incompleta. Complételo de modo que al pasar valores decimales RGB se devuelva una representación hexadecimal. 
// Los valores decimales válidos para RGB son 0 - 255. Cualquier valor que quede fuera de ese rango debe redondearse al valor válido más cercano.

// Nota: Su respuesta siempre debe tener 6 caracteres; la taquigrafía con 3 no funcionará aquí.

// Ejemplos (entrada --> salida):
// 255, 255, 255 --> "FFFFFF"
// 255, 255, 300 --> "FFFFFF"
// 0, 0, 0       --> "000000"
// 148, 0, 211   --> "9400D3"


function rgb(r, g, b) {
    // Redondear los valores al rango válido (0 - 255)
    r = Math.max(0, Math.min(255, Math.round(r)));
    g = Math.max(0, Math.min(255, Math.round(g)));
    b = Math.max(0, Math.min(255, Math.round(b)));

    // Convertir los valores a hexadecimal y asegurarse de que tengan dos dígitos
   const hexR = r.toString(16).padStart(2, '0');
    const hexG = g.toString(16).padStart(2, '0');
    const hexB = b.toString(16).padStart(2, '0');

    // Combinar los valores hexadecimales para obtener el resultado final
    const result = `${hexR.toUpperCase()}${hexG.toUpperCase()}${hexB.toUpperCase()}`;

    return result;
}

// Ejemplos de uso:
console.log(rgb(255, 255, 255)); // "FFFFFF"
console.log(rgb(255, 255, 300)); // "FFFFFF"
console.log(rgb(0, 0, 0));       // "000000"
console.log(rgb(148, 0, 211));   // "9400D3"
