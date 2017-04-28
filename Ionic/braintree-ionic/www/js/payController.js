angular
	.module('starter')
	.controller('payController', payController);

function payController($scope, braintreeService) {
	/**
	 * Form steps
	 * 1. signup - create customer
	 * 2. verification - save & validate card
	 * 3. checkout - charge the card
	 * 4. done - displays transaction id
	 */
	$scope.step = 'signup';

	/**
	 * customerId in Braintree
	 * reference to credit card in Braintree
	 * 
	 * These should be persisted for future reference
	 */
	$scope.customerId = false;
	$scope.paymentMethodToken = false;
	$scope.amount = 10;

	/**
	 * Bypass step forms for testing
	 */
	/*$scope.customerId = '';
	$scope.step = 'checkout';
	$scope.paymentMethodToken = '';
	$scope.card = {
		cardholder: 'Michael',
		number:'4111111111111111',
		cvv: 444,
		expiration_month: 10,
		expiration_year: 18
	};*/

	/**
	 * Setup Braintree client with clientToken generated on our server
	 */
	$scope.ready = false;
	var braintreeClient;
	braintreeService.getClientToken().then(function(clientToken) {
		// braintree.setup(clientToken, "custom", {id: "checkout", enableCORS: true});
		// v3 client sdk read: https://developers.braintreepayments.com/start/hello-client/javascript/v3
		/*
		braintree.client.create({
			authorization: CLIENT_TOKEN_FROM_SERVER
			}, function (err, clientInstance) {
			 
			}); */

		braintreeClient = new braintree.api.Client({clientToken: clientToken, enableCORS: true});
		$scope.ready = true;
	});

	/**
	 * Creates braintree customer
	 */
	$scope.signup = function(customer) {
		braintreeService
			.createCustomer(customer.firstname, customer.lastname, customer.company, customer.email, customer.phone)
			.then(function(customerId) {
				console.log("customerId " + customerId);
				$scope.customerId = customerId;
				$scope.step = 'verification';
			});
	};

	/**
	 * Save card
	 */
	$scope.saveCard = function(card) {
		// console.log('tokenizing card', card);
		// here braintreeClient talk to the Braintree directly to get the nonce!
		braintreeClient.tokenizeCard({
			number: card.number,
			cardholderName: card.cardholder,
			expirationMonth: card.expiration_month,
			expirationYear: card.expiration_year,
			cvv: card.cvv
			// billingAddress: {}
		}, function(err, nonce) {
			if (err) {
				throw err;
			}else {
				$scope.paymentMethodNonce = nonce;
				$scope.step = 'checkout';
			}

			braintreeService
				.createPaymentMethod($scope.customerId, nonce)
				.then(function(paymentMethodToken) {
					console.log('paymentMethodToken ' + paymentMethodToken);
					$scope.paymentMethodToken = paymentMethodToken;
					$scope.step = 'checkout';
				});
		})
	};

	$scope.payByNonce = function(amount){
		var fakeNonce = 'fake-valid-mastercard-nonce';
		braintreeService
			.saleByNonce(amount, fakeNonce)
			.then(function(transactionId) {
				$scope.step = 'done';
				$scope.transactionId = transactionId;
				console.log('transactionId ' + transactionId);
			});
	}

	$scope.payByToken = function(amount) {
		braintreeService
			.saleByToken(amount, $scope.paymentMethodToken)
			.then(function(transactionId) {
				$scope.step = 'done';
				$scope.transactionId = transactionId;
				console.log('transactionId ' + transactionId);
			});
	};
};