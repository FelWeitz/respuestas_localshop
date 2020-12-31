const moment = require("moment-timezone")
const { db } = require("firebase")

function getOpenedBusiness(dialogflowInfo) {
    let intentResponse = {};
    let closedBussiness = false;
    let merge_behavior;
    let textToRespond = "";
    const chileTime = moment().tz('America/Santiago');
    const openAt = 10;
    const monthDay = chileTime.format('MM-DD');
    const monthDay = "12-25"
    const currentHourMinute = chileTime.format('hh:mm');
    const beforeOpenAt = chileTime.hour() < openAt;


    intentResponse.merge_behavior = "APPEND";


    if ((monthDay === "12-24" || monthDay === "12-25" || monthDay === "12-31" || monthDay === "01-01") && (chileTime.hour() >= 19)) {
        textToRespond = `¡Hola! 👋🏼\n\n\t\t A nombre de todo el Equipo de Localshop y en\n representación de todos los locales y shoppers que son\n parte de esta hermosa red, te damos las gracias por\n todo el apoyo que has entregado a la vida de barrio.\n\n\t\t En estas fiestas estaremos apoyándote en los\n siguientes horarios:\n\n- 24 Dic: 10:00 a 19:00 hrs\n- 25 Dic: Cerrado\n- 31 Dic: 10:00 a 19:00 hrs\n - 1 Enero : Cerrado \n\n ¡Te deseamos felices fiestas y que \n tengas un excelente 2021!`;
        intentResponse.merge_behavior = "REPLACE";
        closedBussiness = true;
    }

    if (beforeOpenAt || currentHourMinute <= "2030") {
        textToRespond = `¡Hola! 👋🏼\n\nGracias por comunicarte con Localshop. Tus tiendas de barrio volverán a recibir pedidos desde las 10:00 AM!\nPuedes dejar tu pedido escrito acá o elige directamente en www.localshop.cl y te escribiremos en la apertura para procesarlo.\n\n¡Gracias por cuidar la vida de barrio! 🏡`;
        intentResponse.merge_behavior = "REPLACE";
        closedBussiness = true;
    }


    intentResponse.textToRespond = textToRespond;
    intentResponse.session_info = {
        parameters: {
            closedBussiness: closedBussiness
        }
    };

    return intentResponse;
}

module.exports = getOpenedBusiness;

var go = getOpenedBusiness();
console.log(go);