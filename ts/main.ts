
import { BackgroundService} from './BackgroundService';

let theBackground = new BackgroundService();

document.getElementsByTagName('body')[0].style.backgroundImage = `url('${theBackground.getBackground()}')`;
