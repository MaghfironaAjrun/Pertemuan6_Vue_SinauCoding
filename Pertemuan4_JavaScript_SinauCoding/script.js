console.log('hello');

var totalBus = 10;
var busOperation = 6;
var busLembur = 8;
var numberBus = 1;

for(numberBus = 1; numberBus <= totalBus;numberBus++) {
  
  if(numberBus <= busOperation) {
    console.log('Bus TransJakarta ' + numberBus + ' Beroperasi dengan baik')
  } else if (numberBus > busOperation && numberBus != busLembur) {
    console.log('Bus TransJakarta ' + numberBus + ' Tidak Beroperasi')
  } else {
    console.log('Bus TransJakarta ' + numberBus + ' Sedang Lembur')
  }
}