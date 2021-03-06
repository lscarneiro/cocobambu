let mongoose = require('mongoose'),
    config = require('./config'),
    bcrypt = require('bcrypt');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/cocobambu');

let Recipe = require('./api/models/recipeModel'),
    User = require('./api/models/userModel');

let userDropPromise = new Promise((resolve, reject) => {
   User.collection.drop((err, data) => {
      resolve();
   });
});
let recipeDropPromise = new Promise((resolve, reject) => {
   Recipe.collection.drop((err, data) => {
      resolve();
   });
});

Promise.all([userDropPromise, recipeDropPromise]).then(() => {
   console.log('Droped collections');
   let userPromise = User.create([
      {username: 'luiz', password: bcrypt.hashSync('luiz', config.pwd_salt)},
      {username: 'caio', password: bcrypt.hashSync('caio', config.pwd_salt)}
   ]).then(users => {
      console.log(`${users.length} users created`)
   }).catch((err) => {
      console.log('User Create ERROR:', err);
   });

   let recipePromise = Recipe.create([
      {
         name: 'Arroz de Mariscos para 2 pessoas',
         description: 'Arroz com camarão, lula, peixe, lagosta, e mexilhão, refogado com pimentões e cebola juliene, temperos e um leve toque de açafrão. Servidos na paellera. Rico em sabor e apresentação.',
         ingredients: [
            '1 cebola',
            '2 dentes de alho',
            '3 colheres de sopa de Azeite',
            '4 tomates',
            '2 Pitadas de Sal',
            '1 embalagem de marisco (mistura)',
            '1 embalagem de camarão inteiro congelado',
            '1 chávena de arroz',
            '1 porção de coentros'
         ],
         picture: {
            thumb: '/assets/recipes/prato-arroz-marisco-peq.jpg',
            cover: '/assets/recipes/prato-arroz-grande.jpg'
         },
         duration: 25,
         steps: [
            {
               order: 1,
               description: 'Faça um refogado com o azeite a cebola e os dentes de alho bem picados. Esmague os tomates maduros sem pele e junte ao refogado. Tempere com sal. Deixe "namorar" durante alguns minutos.'
            },
            {
               order: 2,
               description: 'Deixe a descongelar a embalagem de cocktail de marisco e delícias do mar, retire-as também do congelador e ponha-as de parte.'
            },
            {
               order: 3,
               description: 'Junte os mariscos (as delícias ficam para mais tarde) ao refogado e mexa. Com o lume brando, tape o tacho e deixe "namorar" durante 15 minutos. '
            },
            {
               order: 4, description: 'Junte água a tapar esta mistura e assim que ferver deite o arroz e mexa. \n' +
                   'Quando retomar a fervura, deixe cozer tapado durante 10 minutos, vá mexendo para não pegar.'
            },
            {
               order: 5,
               description: 'Apague o lume, junte as delícias cortadas em cubinhos e polvilhe com coentros picados. Sirva de seguida.'
            },
            {
               order: 6,
               description: 'Depois temos o Arroz de Marisco Tradicional que leva todo o tipo marisco, desde sapateira, lagosta, mexilhões e etc.'
            }
         ]
      },
      {
         name: 'Moqueca Tropical',
         description: 'Escolha entre Camarão ou Peixe ou a combinação dos dois | De origem indígena. A moqueca é um cozido de peixe ou camarão ou com mistura de peixe e camarão com tomate, cebola, pimentões e cheiro-verde refogados. Leve toque de azeite de dendê e leite de coco natural. Na versão tropical, acrescentamos manga e abacaxi. Acompanha arroz branco, pirão de camarão e farofa de dendê',
         ingredients: [
            '2 kg de robalo cortado em postas com couro',
            '4 cebolas grandes',
            '1 cabeça de alho',
            '4 tomates grandes',
            'Farinha de mandioca',
            '100ml de azeite de dendê',
            '2 pimentões vermelhos',
            'Sal (à gosto)',
            'Pimenta do reino a gosto',
            'Espinhas e cabeça do robalo',
            '4 bananas em fatias',
            '1kg de camarão descascado'
         ],
         picture: {
            thumb: '/assets/recipes/prato-moqueca-peq.jpg',
            cover: '/assets/recipes/prato-moqueca-grande.jpg'
         },
         duration: 40,
         steps: [
            {
               order: 1,
               description: 'Prepare o caldo de peixe com as espinhas e cabeça.'
            },
            {
               order: 2,
               description: 'Acrescente cebola, pimentão, tomate, alho, sal e pimenta ao caldo até apurar.'
            },
            {
               order: 3,
               description: 'Coloque as bananas por baixo da terrine, intercale com o molho e o peixe.'
            },
            {
               order: 4,
               description: 'Tempere com sal e pimenta.'
            },
            {
               order: 5,
               description: 'Cubra com o molho já com o camarão.'
            },
            {
               order: 6,
               description: 'Leve ao forno por 20 minutos.'
            }
         ]
      },
      {
         name: 'Frutos do Mar ao Azeite de Ervas',
         description: 'Para apreciadores de frutos do mar, com leve aroma de azeite de ervas finas. Mexilhões, polvo, peixe, camarão e lula salteados com azeite, champignon, cebola picada,pimentão, alho, alcaparras e brócolis. Servidos com arroz de brócolis e legumes salteados',
         ingredients: [
            '250 gr fettuccine',
            '250 gr lula',
            '6 unidades de vieira',
            '6 unidades de camarão rosa',
            '60 gr vôngole',
            '100 gr tomate cereja',
            '100 gr mini-abobrinha',
            '200 ml azeite de oliva alecrim a gosto',
            '1 maço de tomilho',
            '1 maço de manjericão',
            '30 gr manteiga',
         ],
         picture: {
            thumb: '/assets/recipes/prato-fruto-peq.jpg',
            cover: '/assets/recipes/prato-fruto-grande.jpg'
         },
         duration: 30,
         steps: [
            {
               order: 1,
               description: 'Junte todas as ervas e pique muito bem com a faca. Some a 150 ml de azeite e deixe'
            },
            {
               order: 2,
               description: 'Limpe as lulas, descartando as nadadeiras e a pele, e guardando os corpos e as cabeças. '
            },
            {
               order: 3,
               description: 'Encha de água uma panela grande e leve ao fogo alto até ferver.'
            },
            {
               order: 4,
               description: 'Junte água a tapar esta mistura e assim que ferver deite o arroz e mexa. \n' +
                   'Quando retomar a fervura, deixe cozer tapado durante 10 minutos, vá mexendo para não pegar.'
            },
            {
               order: 5,
               description: 'Apague o lume, junte as delícias cortadas em cubinhos e polvilhe com coentros picados. Sirva de seguida.'
            },
            {
               order: 6,
               description: 'Selar os camarões, repita o processo com a lula e acabou!'
            }
         ]
      },
      {
         name: 'Massa espaguete à Italiana',
         description: 'Espaguete italiano coberto com mexilhões, lula, polvo, camarões, salteados no azeite com alho, cebola, molho de tomates frescos e manjericão.',
         ingredients: [
            '200 gr Espaguete',
            '6 unidades de vieira',
            '6 unidades de camarão rosa',
            '60 gr vôngole',
            '300 gr tomate cereja',
            '200 ml azeite de oliva alecrim a gosto',
            '1 maço de tomilho',
            '30 gr manteiga'
         ],
         picture: {
            thumb: '/assets/recipes/prato-massa-peq.jpg',
            cover: '/assets/recipes/prato-massa-grande.jpg'
         },
         duration: 18,
         steps: [
            {
               order: 1,
               description: 'Cozinhe o macarrão em água fervente e sal, até que fique al dente'
            },
            {
               order: 2,
               description: 'Enquanto isso, em uma panela, aqueça o azeite, adicione os tomates, os sticks e refogue ligeiramente'
            },
            {
               order: 3,
               description: 'Junte o manjericão e misture'
            },
            {
               order: 4,
               description: 'Escorra o macarrão, coloque em um recipiente e adicione o refogado de tomates'
            },
            {
               order: 5,
               description: 'Apague o lume, junte as delícias cortadas em cubinhos e polvilhe com coentros picados. Sirva de seguida.'
            },
            {
               order: 6,
               description: 'Polvilhe o queijo ralado e sirva a seguir'
            }
         ]
      },
      {
         name: 'Bobó de Lagosta',
         description: 'De origem indígena com toques cearenses. Esta moqueca de lagosta é feita com verduras refogadas acrescidas de leite de coco, azeite de dendê e coentro. Acompanha arroz branco, pirão de camarão e farofa de dendê',
         ingredients: [
            '1 kg de camarão fresco',
            'sal a gosto',
            '3 dentes de alho picados e amassados',
            'suco de 1 limão',
            'pimenta-do-reino',
            '1 kg de mandioca (prefira as que já vem embaladas e descascadas, é mais prático)',
            '3 cebolas (1 cortada em rodelas e 2 raladas)',
            '1 folha de louro',
            '6 colheres (sopa) de azeite de oliva',
            '2 vidros de leite de coco',
            '1 maço de cheiro-verde picado',
            '2 latas de molho pronto de tomate (pomarola)',
            '2 pimentões verdes bem picadinhos',
            '2 colheres (sopa) de azeite de dendê'
         ],
         picture: {
            thumb: '/assets/recipes/prato-bobo-peq.jpg',
            cover: '/assets/recipes/prato-bobo-grande.jpg'
         },
         duration: 50,
         steps: [
            {
               order: 1,
               description: 'Lave os camarões e tempere com sal, alho, pimenta e limão, deixe marinar'
            },
            {
               order: 2,
               description: 'Pegue uma panela com água e cozinhe a mandioca em pedacinhos, com louro e a cebola em rodelas.\n' +
                   'Quando estiver mole, acrescente um vidro de leite de coco'
            },
            {
               order: 3,
               description: 'Deixe esfriar um pouco e bata no liquidificador\n' +
                   'Esquente o azeite de oliva, junte a cebola ralada e deixe dourar'
            },
            {
               order: 4,
               description: 'Acrescente os camarões e frite'
            },
            {
               order: 5,
               description: 'Adicione as 2 latas de pomarola, o cheiro-verde, o pimentão e deixe cozinhar por alguns minutos'
            },
            {
               order: 6,
               description: 'Junte na mesma panela, a mandioca batida no liquidificador, outro vidro de leite de coco e o azeite de dendê. Deixe levantar fervura e está pronto.'
            }
         ]
      },
   ]).then(users => {
      console.log(`${users.length} Recipes created`)
   }).catch((err) => {
      console.log('Recipe Create ERROR:', err);
   });

   Promise.all([userPromise, recipePromise])
       .then(() => {
          console.log('Seed finished');
       })
       .catch((err) => {
          console.log('ERROR!', err);
       })
       .finally(() => {
          mongoose.connection.close();
          process.exit()
       });

});
