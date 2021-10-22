const encuCobMotivosLst = [];
const cobWhyCallOp = [];
const encuCobAtenOpLst = [];
	bmconsole.log('1');
    if (user.get('encuestaCalifCob') <= 6) { 
      bmconsole.log('2');
        user.set('encuCobMotQuestion',' De la siguiente lista podrías elegir la principal razón por la que pusiste ese número? ' + user.get('encuestCalifCob'));
            encuCobMotivosLst.push({
            id:'a',
            name:'Desde que te contactas hasta que atiende un operador se hace largo 😴'
            });
            encuCobMotivosLst.push({
            id:'b',
            name:' No resolvió la consulta/duda por la que me contacté ☹️'
            });
        encuCobMotivosLst.push({
            id:'c',
            name:' El operador no tuvo paciencia/ buena forma de explícarme mi situación 👎'
            }); 
        encuCobMotivosLst.push({
            id:'d',
            name:'El operador tardaba mucho entre respuesta y respuesta 🐢'
            });
        encuCobMotivosLst.push({
            id:'e',
            name:' No ofrecen alternativas/facilidades para regularizar la situación 🤷‍♂️'
            });
	bmconsole.log('3');
    } else if (user.get('encuestaCalifCob') >= 7 && user.get('encuestaCalifCob') <= 8) {
      	bmconsole.log('4');
        user.set('encuCobMotQuestion','¿Qué debería mejorar Credicuotas para que les des una mejor puntuación?');
        encuCobMotivosLst.push({
            id:'a',
            name:'Que tarde menos en responder un operador 😴'
            });
        encuCobMotivosLst.push({
            id:'b',
            name:'Que resuelvan las consultas por las que uno se contacta 🐢'
            });
        encuCobMotivosLst.push({
            id:'c',
            name:'Que mejore el trato de los operadores 😩'
            });
        encuCobMotivosLst.push({
            id:'d',
            name:'Que den información más exacta sobre lo que uno consulta/ reclama 😡'
            });
        encuCobMotivosLst.push({
            id:'e',
            name:'Que den alternativas/ facilidades para regularizar la situación 😡'
            });
	bmconsole.log('5');
    } else if (user.get('encuestaCalifCob') >= 9 && user.get('encuestaCalifCob') <= 10) {
      	bmconsole.log('6');
        user.set('encuCobMotQuestion','¿Qué debería mejorar Credicuotas para que les des una mejor puntuación?');
        encuCobMotivosLst.push({
            id:'a',
            name:'Es rápido desde que te contactás hasta que te contesta un operador 🏃🏽'
            });
        encuCobMotivosLst.push({
            id:'b',
            name:'Resolvieron la consulta/duda por la que me contacte 🥳'
            });
        encuCobMotivosLst.push({
            id:'c',
            name:' El operador me explico/ me dio la información que necesitaba 😄'
            });
        encuCobMotivosLst.push({
            id:'d',
            name:' El operador hizo todo lo posible para ayudarme en la consulta/ reclamo 👏🏼'
            });
        encuCobMotivosLst.push({
            id:'e',
            name:'El operador fue muy amable y respetuoso con el trato 🤗'
            });
	bmconsole.log('7');
    } else {
        user.set('encuCobMotQuestion','Por favor, elija de la siguiente lista la razón principal por la que calificaste con '+ user.get('*encuestaCalifCob*') );
      	bmconsole.log('8');
        encuCobMotivosLst.push({
        id:'a',
        name:'Es rápido desde que te contactás hasta que te contesta un operador 😎'
        });
        encuCobMotivosLst.push({
        id:'b',
        name:'Es rápido el tiempo desde que te dice que te derivó al centro de atención hasta que un operador contesta 🤗'
        });
        encuCobMotivosLst.push({
        id:'c',
        name:'Resolvieron la consulta/duda por la que me contacte 🥳'
        });
        encuCobMotivosLst.push({
        id:'d',
        name:'El operador fue claro con la información que me dió 🤝'
        });
        encuCobMotivosLst.push({
        id:'e',
        name:'El operador contestaba rápido entre mensaje y mensaje 🤙'
        });
        encuCobMotivosLst.push({
        id:'f',
        name:'El operador contestaba rápido entre mensaje y mensaje 🤙'
        });
    }
        encuCobMotivosLst.push({
        id:'zzxc',
        name:'Otra razón ✍️'
        });
	bmconsole.log('9');
    user.set('encuCobMotivosLst', JSON.stringify(encuCobMotivosLst));

        cobWhyCallOp.push({
            id:'a',
            name:'En las opciones que me ofreció el BOT no estaba lo que yo necesitaba hacer'
        }); 
        cobWhyCallOp.push({
            id:'b',
            name:'Me daba más tranquilidad que un operador me atienda'
        });
        cobWhyCallOp.push({
            id:'c',
            name:'Me derivó directamente a un operador'
        });
        cobWhyCallOp.push({
            id:'d',
            name:'Solo podía resolverse con un operador/ hablando con alguien'
        });
        cobWhyCallOp.push({
            id:'zzxc',
            name:'Otra razón ✍️'
        });
	bmconsole.log('10');
    user.set('cobWhyCallOp', JSON.stringify(cobWhyCallOp));

        encuCobAtenOpLst.push({
            id:'a',
            name:'Muy satisfecho/a'
        });

        encuCobAtenOpLst.push({
            id:'b',
            name:'Satisfecho/a'
        });

        encuCobAtenOpLst.push({
            id:'c',
            name:'Ni satisfecho/a ni insatisfecho/a'
        });

        encuCobAtenOpLst.push({
            id:'d',
            name:'Algo satisfecho/a'
        });

        encuCobAtenOpLst.push({
            id:'e',
            name:'Nada satisfecho/a'
        });
	bmconsole.log('11');
    user.set('encuCobAtenOpLst', JSON.stringify(encuCobAtenOpLst));

result.done(); 