const Alexa = require('ask-sdk-core');
var http = require('http'); 

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        const speakOutput = 'Olá, em que posso te ajudar?';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
const TarefaMaisLongaIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'TarefaMaisLongaIntent';
    },
    async handle(handlerInput) {
      let outputSpeech = 'A conexão falhou.';
  
      await getRemoteData('http://177.55.114.52/dash/Alexa/piramide/tarefa_mais_longa.php')
        .then((response) => {
          const data = JSON.parse(response);
     outputSpeech = ` ${data[0].result} `;
    })
        .catch((err) => {
          console.log(`ERROR: ${err.message}`);
          // set an optional error message here
          // outputSpeech = err.message;
        });
  
      return handlerInput.responseBuilder
        .speak(outputSpeech)
        .reprompt('Você pode querer saber qual foi a tarefa mais curta, o resumo do dia ou o resumo dos colaboradores')
        .getResponse();
    },
  };

  
const TarefaMaisCurtaIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'TarefaMaisCurtaIntent';
    },
    async handle(handlerInput) {
      let outputSpeech = 'A conexão falhou.';
  
      await getRemoteData('http://177.55.114.52/dash/Alexa/piramide/tarefa_mais_curta.php')
        .then((response) => {
          const data = JSON.parse(response);
     outputSpeech = ` ${data[0].result} `;
    })
        .catch((err) => {
          console.log(`ERROR: ${err.message}`);
          // set an optional error message here
          // outputSpeech = err.message;
        });
  
      return handlerInput.responseBuilder
        .speak(outputSpeech)
        .reprompt('você pode querer saber qual foi a tarefa mais curta, o resumo do dia ou o resumo dos colaboradores')
        .getResponse();
    },
  };

const ResumoExecutantesIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'ResumoExecutantesIntent';
    },
    async handle(handlerInput) {
      let outputSpeech = 'A conexão falhou.';
  
      await getRemoteData('http://177.55.114.52/dash/Alexa/piramide/resumo_executantes.php')
        .then((response) => {
          const data = JSON.parse(response);
     outputSpeech = ` ${data[0].result} `;
    })
        .catch((err) => {
          console.log(`ERROR: ${err.message}`);
          // set an optional error message here
          // outputSpeech = err.message;
        });
  
      return handlerInput.responseBuilder
        .speak(outputSpeech)
        .reprompt('você pode querer saber qual foi a tarefa mais curta, o resumo do dia ou o resumo dos colaboradores')
        .getResponse();
    },
  };

const ResumoDoDiaIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'ResumoDoDiaIntent';
    },
    async handle(handlerInput) {
      let outputSpeech = 'A conexão falhou.';
  
      await getRemoteData('http://177.55.114.52/dash/Alexa/piramide/resumo_dia.php')
        .then((response) => {
          const data = JSON.parse(response);
     outputSpeech = ` ${data[0].result} `;
    })
        .catch((err) => {
          console.log(`ERROR: ${err.message}`);
          // set an optional error message here
          // outputSpeech = err.message;
        });
  
      return handlerInput.responseBuilder
        .speak(outputSpeech)
        .reprompt('você pode querer saber qual foi a tarefa mais curta, o resumo do dia ou o resumo dos colaboradores')
        .getResponse();
    },
  };
  
const QuemExecutouIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'QuemExecutouIntent';
    },
    async handle(handlerInput) {
      let outputSpeech = 'A conexão falhou.';
  
      await getRemoteData('http://177.55.114.52/dash/Alexa/piramide/executantes.php')
        .then((response) => {
          const data = JSON.parse(response);
     outputSpeech = ` ${data[0].result} `;
    })
        .catch((err) => {
          console.log(`ERROR: ${err.message}`);
          // set an optional error message here
          // outputSpeech = err.message;
        });
  
      return handlerInput.responseBuilder
        .speak(outputSpeech)
        .reprompt('você pode querer saber qual foi a tarefa mais curta, o resumo do dia ou o resumo dos colaboradores')
        .getResponse();
    },
  };
const HelpIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Você pode saber consultar um resumo do dia, saber qual foi a tarefa mais longa ou a mais curta, analisar um resumo dos colaboradores';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speakOutput = 'Até logo!';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};
const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse();
    }
};

// The intent reflector is used for interaction model testing and debugging.
// It will simply repeat the intent the user said. You can create custom handlers
// for your intents by defining them above, then also adding them to the request
// handler chain below.
const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = Alexa.getIntentName(handlerInput.requestEnvelope);
        const speakOutput = `Você ativou o  ${intentName}`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};

// Generic error handling to capture any syntax or routing errors. If you receive an error
// stating the request handler chain is not found, you have not implemented a handler for
// the intent being invoked or included it in the skill builder below.
const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        console.log(`~~~~ Error handled: ${error.stack}`);
        const speakOutput = `Sorry, I had trouble doing what you asked. Please try again.`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};


const getRemoteData = (url) => new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? require('https') : require('http');
    const request = client.get(url, (response) => {
      if (response.statusCode < 200 || response.statusCode > 299) {
        reject(new Error(`Failed with status code: ${response.statusCode}`));
      }
      const body = [];
      response.on('data', (chunk) => body.push(chunk));
      response.on('end', () => resolve(body.join('')));
    });
    request.on('error', (err) => reject(err));
  });

exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        TarefaMaisLongaIntentHandler,
        TarefaMaisCurtaIntentHandler,
        ResumoExecutantesIntentHandler,
        ResumoDoDiaIntentHandler,
        QuemExecutouIntentHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler, // make sure IntentReflectorHandler is last so it doesn't override your custom intent handlers
    )
    .addErrorHandlers(
        ErrorHandler,
    )
    .lambda();
