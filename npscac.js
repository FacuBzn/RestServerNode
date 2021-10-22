const encuCacMotivosLst = [];
const cacWhyCallOp = [];
const encuCacAtenOpLst = [];
if (user.get('encuestaCalifCac') <= 6) { 
  user.set('encuCacMotQuestion','De la siguiente lista, podrías elegir la principal razón por la que nos calificaste con un ' + user.get('encuestaCalifCac'));
    encuCacMotivosLst.push({
      id:'a',
      name:'Desde que te contactas hasta que atiende un operador se hace largo 😴'
	});
  	encuCacMotivosLst.push({
      id:'b',
      name:'No resolvió la consulta/duda por la que me contacté ☹️'
  	});
  encuCacMotivosLst.push({
      id:'c',
      name:'El operador no fue claro con la información/explicación que me dió 👎'
  	}); 
  encuCacMotivosLst.push({
      id:'d',
      name:'El operador tardaba mucho entre respuesta y respuesta 🐢'
  	});
} else if (user.get('encuestaCalifCac') > 6 && user.get('encuestaCalifCac') <= 8) {
  user.set('encuCacMotQuestion','¿Qué debería mejorar Credicuotas para que les des una mejor puntuación?');
  encuCacMotivosLst.push({
      id:'a',
      name:'Que tarde menos en responder un operador 😴'
      });
  encuCacMotivosLst.push({
      id:'b',
      name:'Que resuelvan más rápido las consultas por las que uno se contacta 🐢'
      });
  encuCacMotivosLst.push({
      id:'c',
      name:'Que mejoren las respuestas que te dan los operadores 😩'
      });
  encuCacMotivosLst.push({
      id:'d',
      name:'Que mejore el trato de los operadores 😡'
      });
} else {
  user.set('encuCacMotQuestion','Por favor, elija de la siguiente lista la razón principal por la que calificaste con ' + user.get('encuestaCalifCac') );
    encuCacMotivosLst.push({
      id:'a',
      name:'Es rápido desde que te contactás hasta que te contesta un operador 😎'
      });
  	encuCacMotivosLst.push({
      id:'b',
      name:'Es rápido el tiempo desde que te dice que te derivó al centro de atención hasta que un operador contesta 🤗'
    });
    encuCacMotivosLst.push({
      id:'c',
      name:'Resolvieron la consulta/duda por la que me contacte 🥳'
    });
   encuCacMotivosLst.push({
      id:'d',
      name:'El operador fue claro con la información que me dió 🤝'
    });
   encuCacMotivosLst.push({
      id:'e',
      name:'El operador contestaba rápido entre mensaje y mensaje 🤙'
    });
}
encuCacMotivosLst.push({
  id:'zzxc',
  name:'Otra razón ✍️'
});

user.set('encuCacMotivosLst', JSON.stringify(encuCacMotivosLst));

cacWhyCallOp.push({
  id:'a',
  name:'No encontraba el tema por el que necesitaba consultar'
});
cacWhyCallOp.push({
  id:'b',
  name:'Me daba más tranquilidad que un operador me conteste'
});
cacWhyCallOp.push({
  id:'c',
  name:'Me derivó directamente a un operador sin consultarme'
});
cacWhyCallOp.push({
  id:'zzxc',
  name:'Otra razón ✍️'
});

user.set('cacWhyCallOp', JSON.stringify(cacWhyCallOp));

encuCacAtenOpLst.push({
  id:'a',
  name:'Muy satisfecho/a'
});

encuCacAtenOpLst.push({
  id:'b',
  name:'Satisfecho/a'
});

encuCacAtenOpLst.push({
  id:'c',
  name:'Ni satisfecho/a ni insatisfecho/a'
});

encuCacAtenOpLst.push({
  id:'d',
  name:'Algo satisfecho/a'
});

encuCacAtenOpLst.push({
  id:'e',
  name:'Nada satisfecho/a'
});

user.set('encuCacAtenOpLst', JSON.stringify(encuCacAtenOpLst));

result.done(); 