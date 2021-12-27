import {Pet} from '../interfaces/pet';

interface DataI {
  dogs: Pet[];
  cats: Pet[];
}

const data: DataI = {
  dogs: [
    {
      id: '12fed1b7-0773-4a56-978f-39f0e849bd7a',
      name: 'Kenzie',
      photo: 'https://images.dog.ceo/breeds/labrador/n02099712_2234.jpg',
      gender: 'Male',
      breed: 'Labrador',
      address: '71 Pawling Alley',
      monthsWaiting: 2,
      author: 'Seamus McGiveen',
      authorAvatar:
        'https://robohash.org/sitrerumvoluptates.png?size=50x50&set=set1',
    },
    {
      id: '99cc4c51-b727-424a-b101-2f490fe5e223',
      name: 'Jamie',
      photo: 'https://images.dog.ceo/breeds/beagle/n02088364_12124.jpg',
      gender: 'Male',
      breed: 'Beagle',
      address: '427 Brentwood Park',
      monthsWaiting: 1,
      author: 'Coleman Clausson',
      authorAvatar:
        'https://robohash.org/officiissintmagni.png?size=50x50&set=set1',
    },
    {
      id: 'd8198694-8e4e-43c1-b825-75ea435e9a86',
      name: 'Emerson',
      photo: 'https://images.dog.ceo/breeds/beagle/n02088364_12745.jpg',
      gender: 'Female',
      breed: 'Beagle',
      address: '745 Carpenter Street',
      monthsWaiting: 2,
      author: 'Martina Treen',
      authorAvatar: 'https://robohash.org/quosidipsum.png?size=50x50&set=set1',
    },
    {
      id: 'fd762e4b-f497-4b87-8671-04a9a97c6a57',
      name: 'Daryl',
      photo: 'https://images.dog.ceo/breeds/bulldog-french/n02108915_5669.jpg',
      gender: 'Male',
      breed: 'French Bulldog',
      address: '88428 Gulseth Junction',
      monthsWaiting: 2,
      author: "Hubert D'Acth",
      authorAvatar:
        'https://robohash.org/ametdignissimosfuga.png?size=50x50&set=set1',
    },
    {
      id: '430cb883-1a79-425d-97eb-3471fb5b7602',
      name: 'Kenzie',
      photo: 'https://images.dog.ceo/breeds/bulldog-boston/n02096585_2821.jpg',
      gender: 'Male',
      breed: 'Bulldog',
      address: '835 Packers Drive',
      monthsWaiting: 2,
      author: 'Ned Blazej',
      authorAvatar:
        'https://robohash.org/nisifugiatcupiditate.png?size=50x50&set=set1',
    },
    {
      id: 'b6f02935-754a-425a-9d26-36f883ac837c',
      name: 'Frankie',
      photo: 'https://images.dog.ceo/breeds/germanshepherd/n02106662_855.jpg',
      gender: 'Male',
      breed: 'German Shorthaired',
      address: '13 Arrowood Drive',
      monthsWaiting: 1,
      author: 'Katrina Fike',
      authorAvatar:
        'https://robohash.org/autfaciliseveniet.png?size=50x50&set=set1',
    },
    {
      id: 'e08597b1-0b8a-4c26-a44b-8c0e1cdaeef8',
      name: 'Erin',
      photo: 'https://images.dog.ceo/breeds/bulldog-french/n02108915_3083.jpg',
      gender: 'Male',
      breed: 'French Bulldog',
      address: '434 Ridgeview Junction',
      monthsWaiting: 2,
      author: 'Jake Degoy',
      authorAvatar:
        'https://robohash.org/suscipitplaceatullam.png?size=50x50&set=set1',
    },
    {
      id: 'cedbc4d6-61f7-406d-9cfb-5aaf33059dbd',
      name: 'Daryl',
      photo: 'https://images.dog.ceo/breeds/corgi-cardigan/n02113186_9000.jpg',
      gender: 'Female',
      breed: 'Pembroke Welsh Corgi',
      address: '85267 Upham Circle',
      monthsWaiting: 2,
      author: 'Marlane Sinson',
      authorAvatar:
        'https://robohash.org/iureaspernatursit.png?size=50x50&set=set1',
    },
    {
      id: '908687cb-de82-4ac0-a5b0-113d46dcd6a9',
      name: 'Jamie',
      photo: 'https://images.dog.ceo/breeds/poodle-toy/n02113624_2019.jpg',
      gender: 'Female',
      breed: 'Poodle',
      address: '518 Mesta Alley',
      monthsWaiting: 1,
      author: 'Krishnah Starrs',
      authorAvatar:
        'https://robohash.org/dictasuntvoluptatum.png?size=50x50&set=set1',
    },
    {
      id: '430b2778-e678-4f77-acf2-bc75dec90546',
      name: 'Dana',
      photo: 'https://images.dog.ceo/breeds/bulldog-french/n02108915_2807.jpg',
      gender: 'Female',
      breed: 'French Bulldog',
      address: '5927 Meadow Vale Junction',
      monthsWaiting: 1,
      author: 'Saxon Bealing',
      authorAvatar: 'https://robohash.org/minusnonquia.png?size=50x50&set=set1',
    },
    {
      id: 'd93c2294-0f60-4bb3-a83a-1511664390d3',
      name: 'Emerson',
      photo: 'https://images.dog.ceo/breeds/corgi-cardigan/n02113186_7220.jpg',
      gender: 'Female',
      breed: 'Pembroke Welsh Corgi',
      address: '6 Bluestem Lane',
      monthsWaiting: 2,
      author: 'Zacharias Bemment',
      authorAvatar:
        'https://robohash.org/ipsamautmagni.png?size=50x50&set=set1',
    },
    {
      id: '3b694dc2-7036-4f4d-9a20-4ae9026a3cbd',
      name: 'Devin',
      photo: 'https://images.dog.ceo/breeds/beagle/n02088364_13477.jpg',
      gender: 'Male',
      breed: 'Beagle',
      address: '3044 1st Street',
      monthsWaiting: 3,
      author: 'Yehudit Wagg',
      authorAvatar:
        'https://robohash.org/totametmaxime.png?size=50x50&set=set1',
    },
    {
      id: 'c0847488-9ea6-4409-b30d-10135033dd5a',
      name: 'Hayden',
      photo: 'https://images.dog.ceo/breeds/doberman/n02107142_6439.jpg',
      gender: 'Female',
      breed: 'Doberman Pinscher',
      address: '6 Bunker Hill Street',
      monthsWaiting: 2,
      author: 'Dov Winsor',
      authorAvatar:
        'https://robohash.org/doloremdebitiset.png?size=50x50&set=set1',
    },
    {
      id: 'f481ff50-312f-4cf8-8b2d-15a595b83911',
      name: 'Kai',
      photo: 'https://images.dog.ceo/breeds/pug/django-resized.jpg',
      gender: 'Male',
      breed: 'Pug',
      address: '0011 Westridge Court',
      monthsWaiting: 1,
      author: 'Eryn Lammas',
      authorAvatar:
        'https://robohash.org/abquibusdamratione.png?size=50x50&set=set1',
    },
    {
      id: 'e39a69ef-6ce9-4ac3-9c90-ed7da5f89004',
      name: 'Devin',
      photo: 'https://images.dog.ceo/breeds/germanshepherd/n02106662_4201.jpg',
      gender: 'Female',
      breed: 'German Shepherd Dog',
      address: '8 Fair Oaks Crossing',
      monthsWaiting: 3,
      author: 'Larina Forestel',
      authorAvatar:
        'https://robohash.org/nonquiplaceat.png?size=50x50&set=set1',
    },
    {
      id: 'f0b967eb-98a3-45f3-82aa-197490d2e7cf',
      name: 'Jayden',
      photo: 'https://images.dog.ceo/breeds/husky/n02110185_14594.jpg',
      gender: 'Female',
      breed: 'Siberian Huskie',
      address: '6895 Donald Hill',
      monthsWaiting: 3,
      author: 'Kakalina Flecknoe',
      authorAvatar:
        'https://robohash.org/assumendaestreiciendis.png?size=50x50&set=set1',
    },
    {
      id: '1d093918-45ea-4f81-abbd-a630f1f63b7a',
      name: 'Cory',
      photo: 'https://images.dog.ceo/breeds/germanshepherd/n02106662_808.jpg',
      gender: 'Female',
      breed: 'German Shorthaired',
      address: '5828 Marquette Park',
      monthsWaiting: 2,
      author: 'Cal Bonde',
      authorAvatar:
        'https://robohash.org/praesentiumetqui.png?size=50x50&set=set1',
    },
    {
      id: '3b94468a-5d89-4fdd-83ed-f14df923977a',
      name: 'Jerry',
      photo: 'https://images.dog.ceo/breeds/husky/n02110185_11409.jpg',
      gender: 'Female',
      breed: 'Siberian Huskie',
      address: '81991 Bayside Pass',
      monthsWaiting: 2,
      author: 'Haley Frisby',
      authorAvatar: 'https://robohash.org/quodoloremid.png?size=50x50&set=set1',
    },
    {
      id: 'd31141c6-ed57-4ede-9237-4dcf327ca1bc',
      name: 'Hailey',
      photo: 'https://images.dog.ceo/breeds/germanshepherd/n02106662_3116.jpg',
      gender: 'Male',
      breed: 'German Shepherd Dog',
      address: '32 Dunning Place',
      monthsWaiting: 2,
      author: 'Fredericka Coughan',
      authorAvatar:
        'https://robohash.org/omnisquimollitia.png?size=50x50&set=set1',
    },
    {
      id: '38175d29-d637-44d4-9c8a-82315c832053',
      name: 'Kenzie',
      photo: 'https://images.dog.ceo/breeds/corgi-cardigan/n02113186_11741.jpg',
      gender: 'Male',
      breed: 'Pembroke Welsh Corgi',
      address: '56037 Huxley Point',
      monthsWaiting: 2,
      author: 'Edlin Whichelow',
      authorAvatar:
        'https://robohash.org/voluptatesvoluptasnihil.png?size=50x50&set=set1',
    },
    {
      id: 'c1e4d1c4-765d-4fc7-ab1a-d12f7d829f36',
      name: 'Harper',
      photo: 'https://images.dog.ceo/breeds/rottweiler/n02106550_982.jpg',
      gender: 'Female',
      breed: 'Rottweiler',
      address: '52173 Lunder Center',
      monthsWaiting: 1,
      author: 'Cherri Scarisbrick',
      authorAvatar:
        'https://robohash.org/architectonequevoluptatem.png?size=50x50&set=set1',
    },
    {
      id: '339581be-c2c1-47de-ae06-5cc6c4a7e009',
      name: 'Jayden',
      photo:
        'https://images.dog.ceo/breeds/terrier-yorkshire/n02094433_3947.jpg',
      gender: 'Male',
      breed: 'Yorkshire Terrier',
      address: '8075 Clarendon Road',
      monthsWaiting: 1,
      author: 'Pam Truter',
      authorAvatar:
        'https://robohash.org/natusrerumsit.png?size=50x50&set=set1',
    },
    {
      id: '81ac3a79-5803-44a2-a2b9-9c1ee5e2d68a',
      name: 'Danny',
      photo:
        'https://images.dog.ceo/breeds/poodle-miniature/n02113712_8473.jpg',
      gender: 'Female',
      breed: 'Poodle',
      address: '214 Saint Paul Place',
      monthsWaiting: 3,
      author: 'Maurise Dibbs',
      authorAvatar: 'https://robohash.org/earumaboptio.png?size=50x50&set=set1',
    },
    {
      id: 'f274052b-8db1-4eb2-ba46-dafc88096a06',
      name: 'Jesse',
      photo:
        'https://images.dog.ceo/breeds/terrier-yorkshire/n02094433_3640.jpg',
      gender: 'Female',
      breed: 'Yorkshire Terrier',
      address: '3 Basil Junction',
      monthsWaiting: 2,
      author: 'Brantley McVity',
      authorAvatar:
        'https://robohash.org/facerequireprehenderit.png?size=50x50&set=set1',
    },
    {
      id: 'c8df1c4d-6c92-4eb2-a35a-af657e97d14a',
      name: 'Frankie',
      photo: 'https://images.dog.ceo/breeds/beagle/n02088364_15036.jpg',
      gender: 'Male',
      breed: 'Beagle',
      address: '953 Johnson Place',
      monthsWaiting: 1,
      author: 'Meridith Turmall',
      authorAvatar:
        'https://robohash.org/officiisestaspernatur.png?size=50x50&set=set1',
    },
    {
      id: '636fe35e-6599-4914-9ff7-e0a26e3ba643',
      name: 'Kennedy',
      photo: 'https://images.dog.ceo/breeds/germanshepherd/n02106662_2058.jpg',
      gender: 'Female',
      breed: 'German Shorthaired',
      address: '0571 Carpenter Alley',
      monthsWaiting: 3,
      author: 'Guglielmo Flockhart',
      authorAvatar:
        'https://robohash.org/quivitaetemporibus.png?size=50x50&set=set1',
    },
    {
      id: '119ac67f-ec6e-4964-a3dd-d49aff046ecf',
      name: 'Greer',
      photo:
        'https://images.dog.ceo/breeds/terrier-yorkshire/n02094433_3604.jpg',
      gender: 'Male',
      breed: 'Yorkshire Terrier',
      address: '4066 Caliangt Crossing',
      monthsWaiting: 1,
      author: 'Burr Pynn',
      authorAvatar:
        'https://robohash.org/oditutdelectus.png?size=50x50&set=set1',
    },
    {
      id: '7d22cd8d-48d3-49d3-9f61-a18076cbd18f',
      name: 'Harper',
      photo:
        'https://images.dog.ceo/breeds/poodle-miniature/n02113712_4170.jpg',
      gender: 'Female',
      breed: 'Poodle',
      address: '46 Kenwood Park',
      monthsWaiting: 2,
      author: 'Emile Jerrolt',
      authorAvatar:
        'https://robohash.org/architectosimiliqueest.png?size=50x50&set=set1',
    },
    {
      id: 'c093b25c-33e2-4459-91c3-3cc5df0effd5',
      name: 'Harper',
      photo: 'https://images.dog.ceo/breeds/germanshepherd/n02106662_13380.jpg',
      gender: 'Male',
      breed: 'German Shorthaired',
      address: '3 Linden Trail',
      monthsWaiting: 2,
      author: 'Audy Winslet',
      authorAvatar:
        'https://robohash.org/voluptasillumsed.png?size=50x50&set=set1',
    },
    {
      id: '9441509a-2885-411a-898a-8426c241706f',
      name: 'Jesse',
      photo: 'https://images.dog.ceo/breeds/doberman/n02107142_18196.jpg',
      gender: 'Female',
      breed: 'Doberman Pinscher',
      address: '59311 Manley Place',
      monthsWaiting: 2,
      author: 'Jareb Chatwin',
      authorAvatar:
        'https://robohash.org/consequaturdoloresdolorem.png?size=50x50&set=set1',
    },
    {
      id: '3973c14c-3468-4438-a3e8-62154dd8f4a0',
      name: 'Claude',
      photo: 'https://images.dog.ceo/breeds/doberman/n02107142_16217.jpg',
      gender: 'Female',
      breed: 'Shih Tzu',
      address: '54 Pennsylvania Way',
      monthsWaiting: 2,
      author: 'Christophe de Glanville',
      authorAvatar:
        'https://robohash.org/voluptatumeligendiminima.png?size=50x50&set=set1',
    },
    {
      id: 'ecf12cd0-c028-4f3f-84b4-adcf5cadf3de',
      name: 'Hailey',
      photo: 'https://images.dog.ceo/breeds/bulldog-french/n02108915_12904.jpg',
      gender: 'Female',
      breed: 'French Bulldog',
      address: '58006 Spenser Way',
      monthsWaiting: 1,
      author: 'Tirrell Klimas',
      authorAvatar:
        'https://robohash.org/autliberomolestiae.png?size=50x50&set=set1',
    },
    {
      id: 'a1589b0c-9231-4722-a834-170bbd3e3af1',
      name: 'Jamie',
      photo:
        'https://images.dog.ceo/breeds/terrier-yorkshire/n02094433_2223.jpg',
      gender: 'Female',
      breed: 'Yorkshire Terrier',
      address: '23 Superior Place',
      monthsWaiting: 2,
      author: 'Westleigh Bevens',
      authorAvatar:
        'https://robohash.org/voluptatemhicquia.png?size=50x50&set=set1',
    },
    {
      id: '42b5e4a0-2f5a-48d8-be5b-428848f66c2a',
      name: 'Dana',
      photo: 'https://images.dog.ceo/breeds/germanshepherd/n02106662_2810.jpg',
      gender: 'Female',
      breed: 'German Shepherd Dog',
      address: '1066 Rusk Street',
      monthsWaiting: 2,
      author: 'Cari Hillan',
      authorAvatar:
        'https://robohash.org/beataeeaitaque.png?size=50x50&set=set1',
    },
    {
      id: '1d8f8ff5-75e3-4546-8547-dc4be51f3870',
      name: 'Hayden',
      photo: 'https://images.dog.ceo/breeds/dachshund/Daschund-2.jpg',
      gender: 'Female',
      breed: 'Dachshund',
      address: '01513 Jackson Avenue',
      monthsWaiting: 2,
      author: 'Judye McCullock',
      authorAvatar:
        'https://robohash.org/laboriosamdistinctiovoluptate.png?size=50x50&set=set1',
    },
    {
      id: '51039dfd-f011-4761-bb16-7972d514f4cb',
      name: 'Kenzie',
      photo:
        'https://images.dog.ceo/breeds/retriever-golden/Z6A_4068_200803.jpg',
      gender: 'Female',
      breed: 'Golden',
      address: '85 Randy Pass',
      monthsWaiting: 1,
      author: 'Dania Steaning',
      authorAvatar:
        'https://robohash.org/doloremcupiditatesit.png?size=50x50&set=set1',
    },
    {
      id: '5e394761-7e7c-4cb1-add2-639fa09d2dd4',
      name: 'Kai',
      photo: 'https://images.dog.ceo/breeds/dachshund/dog-1018408_640.jpg',
      gender: 'Male',
      breed: 'Dachshund',
      address: '44 Hudson Trail',
      monthsWaiting: 1,
      author: 'Basile Stopher',
      authorAvatar:
        'https://robohash.org/voluptatibusinvoluptatem.png?size=50x50&set=set1',
    },
    {
      id: '0433f09e-58bc-4d8a-b738-742b9f6c0531',
      name: 'Harley',
      photo: 'https://images.dog.ceo/breeds/germanshepherd/n02106662_10676.jpg',
      gender: 'Male',
      breed: 'German Shorthaired',
      address: '39 Waywood Alley',
      monthsWaiting: 2,
      author: 'Bat Finci',
      authorAvatar: 'https://robohash.org/etdolorest.png?size=50x50&set=set1',
    },
    {
      id: '25baf743-688a-4a97-bcaf-e3d543096c44',
      name: 'Greer',
      photo: 'https://images.dog.ceo/breeds/corgi-cardigan/n02113186_10972.jpg',
      gender: 'Male',
      breed: 'Pembroke Welsh Corgi',
      address: '9 Daystar Center',
      monthsWaiting: 3,
      author: 'Alvan Scoone',
      authorAvatar:
        'https://robohash.org/impeditprovidentaut.png?size=50x50&set=set1',
    },
    {
      id: '15f37e00-c488-4b02-9b07-2420f2743a59',
      name: 'Kennedy',
      photo: 'https://images.dog.ceo/breeds/doberman/n02107142_6859.jpg',
      gender: 'Male',
      breed: 'Doberman Pinscher',
      address: '341 Helena Point',
      monthsWaiting: 3,
      author: 'Betteann Tuckie',
      authorAvatar:
        'https://robohash.org/estexcepturiat.png?size=50x50&set=set1',
    },
    {
      id: '5059921c-5910-4634-8398-78fba705e729',
      name: 'Kai',
      photo: 'https://images.dog.ceo/breeds/beagle/n02088364_8871.jpg',
      gender: 'Female',
      breed: 'Beagle',
      address: '9636 Ilene Court',
      monthsWaiting: 2,
      author: 'Malena Patient',
      authorAvatar:
        'https://robohash.org/magnamsedminus.png?size=50x50&set=set1',
    },
    {
      id: '70247320-9226-4f6d-9021-cc6d3f081b45',
      name: 'Jerry',
      photo: 'https://images.dog.ceo/breeds/bulldog-boston/n02096585_2180.jpg',
      gender: 'Male',
      breed: 'Bulldog',
      address: '4 Ridge Oak Street',
      monthsWaiting: 1,
      author: 'Leyla Wetherell',
      authorAvatar:
        'https://robohash.org/impeditsitmagni.png?size=50x50&set=set1',
    },
    {
      id: '6ff0d67c-fbfa-444c-8e70-ced6971d4868',
      name: 'Harper',
      photo: 'https://images.dog.ceo/breeds/shihtzu/n02086240_5696.jpg',
      gender: 'Male',
      breed: 'Shih Tzu',
      address: '3 School Pass',
      monthsWaiting: 1,
      author: 'Meredithe Biddle',
      authorAvatar:
        'https://robohash.org/doloreminciduntvoluptas.png?size=50x50&set=set1',
    },
    {
      id: '687c93ed-4ee0-4c4d-9bda-3e797999058e',
      name: 'Jayden',
      photo: 'https://images.dog.ceo/breeds/germanshepherd/n02106662_18922.jpg',
      gender: 'Male',
      breed: 'German Shepherd Dog',
      address: '7 Portage Place',
      monthsWaiting: 1,
      author: 'Giacobo Cowey',
      authorAvatar:
        'https://robohash.org/etquoexpedita.png?size=50x50&set=set1',
    },
    {
      id: '9d3c00f4-625a-4d89-a6b6-5e3f523be2b9',
      name: 'Harper',
      photo: 'https://images.dog.ceo/breeds/shihtzu/n02086240_5976.jpg',
      gender: 'Female',
      breed: 'Shih Tzu',
      address: '4 Green Ridge Pass',
      monthsWaiting: 3,
      author: 'Livia Loades',
      authorAvatar:
        'https://robohash.org/idnonaccusamus.png?size=50x50&set=set1',
    },
    {
      id: '9033b97e-01ff-4886-ab90-0692c7a70a0c',
      name: 'Greer',
      photo: 'https://images.dog.ceo/breeds/bulldog-boston/n02096585_1668.jpg',
      gender: 'Male',
      breed: 'Bulldog',
      address: '09833 Harper Hill',
      monthsWaiting: 2,
      author: 'Rochette MacCumiskey',
      authorAvatar:
        'https://robohash.org/estsuscipitinventore.png?size=50x50&set=set1',
    },
    {
      id: '46815903-8878-4830-9706-3addc71c62aa',
      name: 'Kenzie',
      photo: 'https://images.dog.ceo/breeds/husky/n02110185_10849.jpg',
      gender: 'Male',
      breed: 'Siberian Huskie',
      address: '4391 Katie Road',
      monthsWaiting: 2,
      author: 'Babbette Gilfillan',
      authorAvatar:
        'https://robohash.org/distinctiositeveniet.png?size=50x50&set=set1',
    },
    {
      id: '443429aa-4f65-47c3-9ac5-1d8ce9a1c6fc',
      name: 'Hayden',
      photo:
        'https://images.dog.ceo/breeds/terrier-yorkshire/n02094433_2197.jpg',
      gender: 'Female',
      breed: 'Yorkshire Terrier',
      address: '1460 Red Cloud Drive',
      monthsWaiting: 2,
      author: 'Kessia Rudkin',
      authorAvatar:
        'https://robohash.org/consequaturvoluptatemrecusandae.png?size=50x50&set=set1',
    },
    {
      id: '16b3a245-c690-4ad2-9acf-8b604301bb83',
      name: 'Jerry',
      photo: 'https://images.dog.ceo/breeds/germanshepherd/n02106662_20711.jpg',
      gender: 'Male',
      breed: 'German Shepherd Dog',
      address: '0 Caliangt Trail',
      monthsWaiting: 1,
      author: 'Krystalle Linthead',
      authorAvatar: 'https://robohash.org/quosautet.png?size=50x50&set=set1',
    },
    {
      id: 'c719e73b-ab9c-4d24-b1f2-77dc33bed5e2',
      name: 'Frankie',
      photo:
        'https://images.dog.ceo/breeds/terrier-yorkshire/n02094433_1030.jpg',
      gender: 'Female',
      breed: 'Yorkshire Terrier',
      address: '65 Dennis Center',
      monthsWaiting: 1,
      author: 'Juline Barfoot',
      authorAvatar:
        'https://robohash.org/temporedelectusomnis.png?size=50x50&set=set1',
    },
  ],
  cats: [
    {
      id: '8b61da19-08c7-44fa-b418-b5f474a82195',
      name: 'Dana',
      photo: 'http://dummyimage.com/375x442.png/5fa2dd/ffffff',
      gender: 'Male',
      breed: 'Bengal',
      address: '801 Warrior Way',
      monthsWaiting: 1,
      author: 'Salomi McHardy',
      authorAvatar: 'https://robohash.org/quosuntqui.png?size=50x50&set=set1',
    },
    {
      id: '05c30330-14e2-475c-b110-2b14ab7f5c04',
      name: 'Kennedy',
      photo: 'http://dummyimage.com/375x442.png/dddddd/000000',
      gender: 'Male',
      breed: 'Bombay',
      address: '81666 Mandrake Lane',
      monthsWaiting: 3,
      author: 'Romy Godar',
      authorAvatar:
        'https://robohash.org/culpaquidemid.png?size=50x50&set=set1',
    },
    {
      id: 'c05d9574-e20a-43df-934b-a9442d46fa58',
      name: 'Devin',
      photo: 'http://dummyimage.com/375x442.png/5fa2dd/ffffff',
      gender: 'Female',
      breed: 'Bengal',
      address: '1 Brickson Park Road',
      monthsWaiting: 1,
      author: 'Corabel Lightoller',
      authorAvatar: 'https://robohash.org/ametveniamid.png?size=50x50&set=set1',
    },
    {
      id: '741eb7a4-c487-4733-b41d-984aec8dce9e',
      name: 'Jordan',
      photo: 'http://dummyimage.com/375x442.png/5fa2dd/ffffff',
      gender: 'Male',
      breed: 'Abyssinian',
      address: '7443 Stuart Hill',
      monthsWaiting: 2,
      author: 'Zarla Casone',
      authorAvatar:
        'https://robohash.org/etsuscipitporro.png?size=50x50&set=set1',
    },
    {
      id: 'dfc4bf88-2d4c-4045-9b94-a0a038dd0765',
      name: 'Jayden',
      photo: 'http://dummyimage.com/375x442.png/ff4444/ffffff',
      gender: 'Male',
      breed: 'Bombay',
      address: '76300 Morrow Avenue',
      monthsWaiting: 1,
      author: 'Panchito Rendle',
      authorAvatar:
        'https://robohash.org/fugiatpossimusvoluptatum.png?size=50x50&set=set1',
    },
    {
      id: 'a55f812d-b285-48e9-9455-feceaa8d197f',
      name: 'Claude',
      photo: 'http://dummyimage.com/375x442.png/cc0000/ffffff',
      gender: 'Female',
      breed: 'Birman',
      address: '01 Scofield Street',
      monthsWaiting: 3,
      author: 'Chic Farquarson',
      authorAvatar: 'https://robohash.org/porroetest.png?size=50x50&set=set1',
    },
    {
      id: '5c756654-cc99-47ff-a66a-94330afaf644',
      name: 'Devin',
      photo: 'http://dummyimage.com/375x442.png/dddddd/000000',
      gender: 'Male',
      breed: 'American Bobtail',
      address: '6405 Cambridge Circle',
      monthsWaiting: 2,
      author: 'Baxter Woodson',
      authorAvatar:
        'https://robohash.org/remexplicaboab.png?size=50x50&set=set1',
    },
    {
      id: 'c2c0a17b-07ae-42d7-a018-76df3d1c91df',
      name: 'Jesse',
      photo: 'http://dummyimage.com/375x442.png/cc0000/ffffff',
      gender: 'Female',
      breed: 'Birman',
      address: '41 Forest Run Street',
      monthsWaiting: 1,
      author: 'Eduardo Sewill',
      authorAvatar:
        'https://robohash.org/estautemporro.png?size=50x50&set=set1',
    },
    {
      id: 'fc71d3f1-45f7-48a5-bf6a-41559da186da',
      name: 'Jamie',
      photo: 'http://dummyimage.com/375x442.png/ff4444/ffffff',
      gender: 'Male',
      breed: 'Birman',
      address: '702 Bunting Point',
      monthsWaiting: 1,
      author: 'Danni Howson',
      authorAvatar:
        'https://robohash.org/recusandaeutfacilis.png?size=50x50&set=set1',
    },
    {
      id: '1f262839-db06-4e6c-9d9c-1d785335aa48',
      name: 'Kai',
      photo: 'http://dummyimage.com/375x442.png/cc0000/ffffff',
      gender: 'Female',
      breed: 'Birman',
      address: '17 Darwin Center',
      monthsWaiting: 2,
      author: 'Shirley Schulter',
      authorAvatar:
        'https://robohash.org/istepossimusvoluptatem.png?size=50x50&set=set1',
    },
    {
      id: '697bc2c4-7e0e-467f-9f89-4278f4e5d677',
      name: 'Dana',
      photo: 'http://dummyimage.com/375x442.png/dddddd/000000',
      gender: 'Female',
      breed: 'Bombay',
      address: '3944 Fairfield Circle',
      monthsWaiting: 2,
      author: 'Meredeth Cawdery',
      authorAvatar:
        'https://robohash.org/rerumvoluptatemvel.png?size=50x50&set=set1',
    },
    {
      id: '984d691d-39f9-4d07-a35a-80bcd4153299',
      name: 'Kenzie',
      photo: 'http://dummyimage.com/375x442.png/5fa2dd/ffffff',
      gender: 'Female',
      breed: 'American Wirehair',
      address: '6522 Kenwood Crossing',
      monthsWaiting: 1,
      author: 'Zaccaria Emor',
      authorAvatar:
        'https://robohash.org/aperiamsitsoluta.png?size=50x50&set=set1',
    },
    {
      id: '52ec3396-6a9a-431e-8b45-d4aa05a701eb',
      name: 'Cory',
      photo: 'http://dummyimage.com/375x442.png/cc0000/ffffff',
      gender: 'Female',
      breed: 'American Curl',
      address: '65 Scott Parkway',
      monthsWaiting: 1,
      author: 'Olin Nation',
      authorAvatar: 'https://robohash.org/exadelectus.png?size=50x50&set=set1',
    },
    {
      id: '72355348-48f4-4276-9c87-cea0d079b6d0',
      name: 'Jordan',
      photo: 'http://dummyimage.com/375x442.png/5fa2dd/ffffff',
      gender: 'Female',
      breed: 'American Bobtail',
      address: '59 Mayfield Crossing',
      monthsWaiting: 2,
      author: 'Alverta Heliar',
      authorAvatar:
        'https://robohash.org/dignissimosetcorrupti.png?size=50x50&set=set1',
    },
    {
      id: 'bcc90a67-b69c-4b3e-9f06-c91ff799e248',
      name: 'Dana',
      photo: 'http://dummyimage.com/375x442.png/ff4444/ffffff',
      gender: 'Female',
      breed: 'American Curl',
      address: '4831 Michigan Lane',
      monthsWaiting: 3,
      author: 'Stuart Caldes',
      authorAvatar:
        'https://robohash.org/totamnostrumnobis.png?size=50x50&set=set1',
    },
    {
      id: '219e3807-ae28-4ab1-ad23-cc4aee1fdda7',
      name: 'Hayden',
      photo: 'http://dummyimage.com/375x442.png/dddddd/000000',
      gender: 'Female',
      breed: 'American Wirehair',
      address: '64354 Oneill Point',
      monthsWaiting: 3,
      author: 'Ara Dono',
      authorAvatar:
        'https://robohash.org/quioptiovoluptas.png?size=50x50&set=set1',
    },
    {
      id: 'fd18cde0-efa3-4670-9c7e-1b553a145062',
      name: 'Cory',
      photo: 'http://dummyimage.com/375x442.png/5fa2dd/ffffff',
      gender: 'Male',
      breed: 'American Bobtail',
      address: '75893 Montana Circle',
      monthsWaiting: 1,
      author: 'Evered McKeand',
      authorAvatar:
        'https://robohash.org/nihiloptioquasi.png?size=50x50&set=set1',
    },
    {
      id: '4d7bd38a-8865-4cd6-bce8-b76af7db1649',
      name: 'Kenzie',
      photo: 'http://dummyimage.com/375x442.png/cc0000/ffffff',
      gender: 'Female',
      breed: 'American Curl',
      address: '5 Alpine Place',
      monthsWaiting: 2,
      author: 'Ailina McArd',
      authorAvatar:
        'https://robohash.org/temporetotameum.png?size=50x50&set=set1',
    },
    {
      id: '579e7c10-3bb3-4e70-a8a0-750efbbc98fc',
      name: 'Greer',
      photo: 'http://dummyimage.com/375x442.png/cc0000/ffffff',
      gender: 'Male',
      breed: 'American Shorthair',
      address: '2135 Novick Drive',
      monthsWaiting: 3,
      author: 'Aigneis Roset',
      authorAvatar:
        'https://robohash.org/doloremidnostrum.png?size=50x50&set=set1',
    },
    {
      id: '8cb28373-c617-4944-8fa7-59c8a9e30db1',
      name: 'Devin',
      photo: 'http://dummyimage.com/375x442.png/5fa2dd/ffffff',
      gender: 'Male',
      breed: 'Birman',
      address: '73 Green Alley',
      monthsWaiting: 1,
      author: 'Carol-jean Jeandeau',
      authorAvatar: 'https://robohash.org/odioquia.png?size=50x50&set=set1',
    },
    {
      id: 'b6263020-40c5-4572-bba3-8735ff7b7cde',
      name: 'Jerry',
      photo: 'http://dummyimage.com/375x442.png/5fa2dd/ffffff',
      gender: 'Male',
      breed: 'American Curl',
      address: '49 Sundown Alley',
      monthsWaiting: 3,
      author: 'Zebedee Churchill',
      authorAvatar:
        'https://robohash.org/voluptatemrepudiandaeaccusamus.png?size=50x50&set=set1',
    },
    {
      id: '96d334e5-7689-452a-9024-fb6d81116f6d',
      name: 'Greer',
      photo: 'http://dummyimage.com/375x442.png/cc0000/ffffff',
      gender: 'Male',
      breed: 'Balinese',
      address: '44 Buena Vista Place',
      monthsWaiting: 1,
      author: 'Petunia Matuszkiewicz',
      authorAvatar:
        'https://robohash.org/etoditaccusamus.png?size=50x50&set=set1',
    },
    {
      id: '22a183e6-db56-4d0c-8281-d1e97ffdba64',
      name: 'Kai',
      photo: 'http://dummyimage.com/375x442.png/ff4444/ffffff',
      gender: 'Female',
      breed: 'American Bobtail',
      address: '5058 Manufacturers Trail',
      monthsWaiting: 2,
      author: 'Hedwiga Calliss',
      authorAvatar:
        'https://robohash.org/pariaturquisquamex.png?size=50x50&set=set1',
    },
    {
      id: '96f98a22-e99c-4d31-93c3-2eea7cd16665',
      name: 'Kenzie',
      photo: 'http://dummyimage.com/375x442.png/5fa2dd/ffffff',
      gender: 'Male',
      breed: 'Balinese',
      address: '60 Tennyson Street',
      monthsWaiting: 1,
      author: 'Andra Kryszka',
      authorAvatar:
        'https://robohash.org/quiasittenetur.png?size=50x50&set=set1',
    },
    {
      id: '635a7be7-f1d5-4329-9cf7-2fec4a598e85',
      name: 'Dana',
      photo: 'http://dummyimage.com/375x442.png/dddddd/000000',
      gender: 'Female',
      breed: 'Bengal',
      address: '7 Hayes Court',
      monthsWaiting: 1,
      author: 'Ruddie Hinkes',
      authorAvatar:
        'https://robohash.org/rerumrepudiandaenam.png?size=50x50&set=set1',
    },
    {
      id: '71082454-8ea2-46f7-83c0-3fbc1c4671c1',
      name: 'Harper',
      photo: 'http://dummyimage.com/375x442.png/cc0000/ffffff',
      gender: 'Male',
      breed: 'Birman',
      address: '333 Truax Point',
      monthsWaiting: 1,
      author: 'Pauly Spring',
      authorAvatar: 'https://robohash.org/omnisadsed.png?size=50x50&set=set1',
    },
    {
      id: '63309d1b-d806-4d60-a3d6-711f0a82b3f1',
      name: 'Harper',
      photo: 'http://dummyimage.com/375x442.png/ff4444/ffffff',
      gender: 'Female',
      breed: 'Balinese',
      address: '359 Oakridge Plaza',
      monthsWaiting: 1,
      author: 'Elston MacLardie',
      authorAvatar:
        'https://robohash.org/quisaliquamea.png?size=50x50&set=set1',
    },
    {
      id: 'dd135272-bfd9-4409-9e63-af5a67a83908',
      name: 'Jesse',
      photo: 'http://dummyimage.com/375x442.png/5fa2dd/ffffff',
      gender: 'Male',
      breed: 'Bombay',
      address: '64 Prentice Terrace',
      monthsWaiting: 2,
      author: 'Jori Allin',
      authorAvatar:
        'https://robohash.org/beataesitassumenda.png?size=50x50&set=set1',
    },
    {
      id: 'c7bd600a-36b7-41c8-b8a2-3b1e5414d69a',
      name: 'Kelly',
      photo: 'http://dummyimage.com/375x442.png/5fa2dd/ffffff',
      gender: 'Male',
      breed: 'Abyssinian',
      address: '8 Stoughton Parkway',
      monthsWaiting: 3,
      author: 'Elna Treece',
      authorAvatar: 'https://robohash.org/namatsit.png?size=50x50&set=set1',
    },
    {
      id: '2e7ec5e4-4b5e-4b9d-a386-93a1cd796b78',
      name: 'Cory',
      photo: 'http://dummyimage.com/375x442.png/cc0000/ffffff',
      gender: 'Male',
      breed: 'Abyssinian',
      address: '08600 Tony Avenue',
      monthsWaiting: 3,
      author: 'Marshall Cranney',
      authorAvatar: 'https://robohash.org/autemeoset.png?size=50x50&set=set1',
    },
  ],
};

export default data;
