export default class Modal
{

	modals = {};

	getModal(modal)
	{
		if (typeof modal === 'string') {
			if (!this.modals[modal]) {
				throw new Error('Modal "' + modal + '" not exist.');
			}
			return this.modals[modal];
		}
		return modal;
	}

	live()
	{
		let _this = this;
		jQuery('[data-mesour-modal]').each(function () {
			let $modal = jQuery(this),
				show = $modal.attr('data-mesour-show'),
				name = $modal.attr('data-mesour-modal');

			if ($modal.data('_m-initialized')) {
				return;
			}

			$modal.modal();
			_this.modals[name] = $modal;
			$modal.data('_m-initialized', true);
			if (show === 'true') {
				_this.show($modal);
			}
		});
	}

	delete(modal)
	{
		delete this.modals[modal];
	}

	getBody(modal)
	{
		return this.getModal(modal).find('[mesour-modal-body]');
	}

	onHide(modal, callback)
	{
		modal = this.getModal(modal);
		modal.off('hide.bs.modal.mesour-editable');
		return this.getModal(modal).on('hide.bs.modal.mesour-editable', callback);
	}

	show(modal, callback)
	{
		modal = this.getModal(modal);
		let modalBody = modal.find('[mesour-modal-body]'),
			ajaxLoading = modalBody.attr('data-ajax-loading'),
			isCached = modalBody.attr('data-is-cached') === 'true' ? true : false;

		if (ajaxLoading === 'false') {
			if (typeof callback === 'function') {
				callback(modal);
			}
			modal.modal('show');
		} else {
			let isCacheSaved = modalBody.attr('data-cache-saved');
			if (isCached && isCacheSaved) {
				modal.modal('show');
			} else {
				let link = mesour.url.createLink(ajaxLoading, 'getContent');
				jQuery.get(link).complete(function (response) {
					modalBody.empty().append(response.responseText);
					modalBody.attr('data-cache-saved', 'true');
					if (typeof callback === 'function') {
						callback(modal, response);
					}
					modal.modal('show');
				});
			}
		}
		return modal;
	}

	hide(modal)
	{
		modal = this.getModal(modal);

		modal.modal('hide');

		let modalBody = modal.find('[mesour-modal-body]'),
			ajaxLoading = modalBody.attr('data-ajax-loading'),
			isCached = modalBody.attr('data-is-cached') === 'true' ? true : false;

		if (!isCached && ajaxLoading !== 'false') {
			modalBody.empty();
		}
		return modal;
	}

	toggle(modal)
	{
		return this.getModal(modal).modal('toggle');
	}

	handleUpdate(modal)
	{
		return this.getModal(modal).modal('handleUpdate');
	}

}