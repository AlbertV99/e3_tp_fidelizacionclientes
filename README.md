# e3_tp_fidelizacionclientes

1- Cliente (cliente)

Id (AI)
nombre
apellido
nro_doc
tipo_doc
mail
nacionalidad [tabla aparte]
telefono 
fecha_nac

2- Conceptos de uso de puntos (conceptos_punto) 
id (AI)
descripcion
puntos_requeridos

3- Reglas de asignacion de puntos (reglas_punto)
id (AI)
limite_inferior
limite_superior
monto_equivalencia

4- Parametrizacion de vencimientos de puntos (puntos_vencimiento) 
id (AI)
fecha_inicio
fecha_fin
dias_duracion (calculado)

5- Bolsa de puntos (bolsas_punto) 
id (AI)
id_cliente (referencia cliente)
fecha_asignacion
fecha_caducidad
puntaje_asignado
puntaje_utilizado
puntos_saldo
monto_operacion

6- Uso de puntos (uso_punto_cab) {Cabecera} [Esquema FIFO para utilizacion]
id (AI)
id_cliente (referencia cliente)
puntaje_utilizado
fecha
concepto_uso (listar tabla conceptos_punto)

7- Uso de puntos (uso_punto_det) {detalle}
id (AI)
id_cabecera (referencia uso_punto_cab)
puntaje_utilizado
id_bolsa (referencia bolsas_punto)


8- Reportes [Solo front]
Uso de puntos  (referencia uso_punto_cab // uso_punto_det)
concepto de uso (referencia conceptos_punto)
fecha de uso   
cliente   (referencia cliente)
Bolsa de puntos
cliente (referencia cliente)
rango de puntos 
Clientes con puntos a vencer
cantidad de días  [campo para cargar X cantidad de días]
consulta de clientes
nombre [aproximación] (referencia cliente)
apellido [aproximación] (referencia cliente)
cumpleaños (referencia cliente)

Transacciones
9- Servicios
Carga de puntos
Recibe el id del cliente y monto de la operación , asigna la cantidad de puntos
    Campos 
Cliente (referencia cliente) [id]
Monto [input normal]
Utilizar puntos
Recibe el id del cliente y el identificador de concepto de uso , se descuenta del cliente el uso de puntos , debe enviar un correo 
    Campos 
Cliente (referencia cliente) [id]
Concepto  (referencia conceptos_punto ) [id]
Consultar puntos por X monto
Recibe un monto, y debe devolver la cantidad de puntos que equivale.
    Campos 
Monto  [input normal] 
