import Modal from './Modal.jsx';
import 'mesour-core/dist/mesour.min.js';

(function(mesour) {
	mesour.createWidget('modal', new Modal());
})(window.mesour);

export default Modal;