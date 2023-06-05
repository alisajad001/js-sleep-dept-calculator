// 1. Get sleep hours
const getSleepHours = day => {
    day = day.toLowerCase()
    switch(day) {
      case 'saturday':
        return 5;
      break;
      case 'sunday':
        return 5;
      break;
      case 'monday':
        return 3;
      break;
      case 'tuesday':
        return 4;
      break;
      case 'wednesday':
        return 5;
      break;
      case 'thursday':
        return 7;
      break;
      case 'friday':
        return 3;
      break;
    }
}

// 2. Get total sleep hours
const getActualSleepHours = () => getSleepHours('saturday') + getSleepHours('sunday') + getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday');

// 3. Get ideal sleep hours
const getIdealSleepHours = () => {
    const idealHours = 6;
    return idealHours * 7;
}