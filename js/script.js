//Ищем объекты формы в HTML документе для дальнейшего взаимодействия
const mainForm = document.forms.mainForm;
const selectBrand = mainForm.brandCar;
const selectModel = mainForm.modelCar;
const selectColor = mainForm.colorCar;
const inputRadioFluePetrol = document.querySelector(`#flue-petrol`);
const inputRadioFlueDiesel = document.querySelector(`#flue-diesel`);
const inputRadioFlueGas = document.querySelector(`#flue-gas`);
const inputRadioFlueElectricity = document.querySelector(`#flue-electricity`);
const inputEngineCapacity = mainForm.engineCapacity;
const inputEngineCapacityPlaceholder = inputEngineCapacity.placeholder;
const inputRadioConditionNew = document.querySelector(`#new-car`);
const inputRadioConditionUsed = document.querySelector(`#used-car`);
const blockOwnersVisible = document.querySelector(`.input__box-radio--owners`);
const inputRadioCarOwner = document.querySelector(`#one-owner`);
const inputRadioCarOwners = document.querySelector(`#three-owners`);
const inputRadioPaymentCard = document.querySelector(`#payment-card`);
const inputRadioPaymentCash = document.querySelector(`#payment-cash`);
const inputRadioPaymentInvoice = document.querySelector(`#payment-invoice`);
const submitButton = mainForm.querySelector('button[type="submit"]');

//Ищем объекты формы в HTML документе для вывода сообщений об ошибках в дальнейшем взаимодействия.
const errorBrand = document.querySelector(`.error__brand`);
const errorModel = document.querySelector(`.error__model`);
const errorColor = document.querySelector(`.error__color`);
const errorEngineCapacity = document.querySelector(`.error__engine-capacity`);
const errorCondition = document.querySelector(`.error__condition`);
const errorOwners = document.querySelector(`.error__owners`);
const errorPayment = document.querySelector(`.error__payment`);

// Ищем объекты формы в HTML документе для изменения стилей при дальнейшем взаимодействии.
const selectBrandClass = document.querySelector(`.input__box-brand`);
const selectModelClass = document.querySelector(`.input__box-model`);
const selectColorClass = document.querySelector(`.input__box-color`);
const selectFocusBlurEvent = document.querySelectorAll(`.select`);
const inputFlueClass = document.querySelector(`.input__box-radio--flue`);
const inputEngineCapacityClass = document.querySelector(`.input__box-engine--capacity`);
const inputConditionClass = document.querySelector(`.input__box-radio--condition`);
const inputOwnersClass = document.querySelector(`.input__box-radio--owners`);
const inputPaymentClass = document.querySelector(`.input__box-radio-payment`);
const result = document.querySelector(`.result`);
const price = document.querySelector(`.price`);


// Корректировка выпадающего списка моделей авто при выборе определенной марки
selectBrand.addEventListener(`change`, function (event) {
	if (selectBrand.value === `Renault`) {
		selectModel.innerHTML =
			`<select placeholder="Модель" name="modelCar" required>
				<option value="" selected>Модель</option>
				<option value="Duster">Duster</option>
				<option value="Kaptur">Kaptur</option>`
	} else if (selectBrand.value === `Opel`) {
		selectModel.innerHTML =
			`<select placeholder="Модель" name="modelCar" required>
				<option value="" selected>Модель</option>
				<option value="Astra">Astra</option>
				<option value="Corsa">Corsa</option>`
	} else if (selectBrand.value === `Mazda`) {
		selectModel.innerHTML =
			`<select placeholder="Модель" name="modelCar" required>
				<option value="" selected>Модель</option>
				<option value="RX8">RX8</option>
				<option value="6">6</option>`
	} else if (selectBrand.value === `Jaguar`) {
		selectModel.innerHTML =
			`<select placeholder="Модель" name="modelCar" required>
				<option value="" selected>Модель</option>
				<option value="F-Type">F-Type</option>
				<option value="F-Pace">F-Pace</option>`
	} else {
		selectModel.innerHTML =
			`<select placeholder="Модель" name="modelCar" required>
				<option value="" selected>Модель</option>
				<option value="Duster">Duster</option>
				<option value="Kaptur">Kaptur</option>
				<option value="Astra">Astra</option>
				<option value="Corsa">Corsa</option>
				<option value="RX8">RX8</option>
				<option value="6">6</option>
				<option value="F-Type">F-Type</option>
				<option value="F-Pace">F-Pace</option>`
	}
});

// Корректировка выпадающего списка цвета кузова авто при выборе определенной модели
selectModel.addEventListener(`change`, function (event) {
	if (selectModel.value === `Duster`) {
		selectColor.innerHTML =
			`<select placeholder="Цвет кузова" name="colorCar" required>
					<option value="" selected>Цвет кузова</option>
					<option value="Черный">Черный</option>
					<option value="Белый">Белый</option>
					<option value="Оранжевый">Оранжевый</option>
					<option value="Зеленый">Зеленый</option>`
	} else if (selectModel.value === `Kaptur`) {
		selectColor.innerHTML =
			`<select placeholder="Цвет кузова" name="colorCar" required>
					<option value="" selected>Цвет кузова</option>
					<option value="Белый">Белый</option>
					<option value="Оранжевый">Оранжевый</option>
					<option value="Синий">Синий</option>`
	} else if (selectModel.value === `Astra`) {
		selectColor.innerHTML =
			`<select placeholder="Цвет кузова" name="colorCar" required>
					<option value="" selected>Цвет кузова</option>
					<option value="Серый">Серый</option>
					<option value="Красный">Красный</option>`
	} else if (selectModel.value === `Corsa`) {
		selectColor.innerHTML =
			`<select placeholder="Цвет кузова" name="colorCar" required>
					<option value="" selected>Цвет кузова</option>
					<option value="Красный">Красный</option>
					<option value="Синий">Синий</option>
					<option value="Зеленый">Зеленый</option>`
	} else if (selectModel.value === `RX8`) {
		selectColor.innerHTML =
			`<select placeholder="Цвет кузова" name="colorCar" required>
					<option value="" selected>Цвет кузова</option>
					<option value="Серый">Серый</option>
					<option value="Белый">Белый</option>
					<option value="Красный">Красный</option>
					<option value="Синий">Синий</option>`
	} else if (selectModel.value === `6`) {
		selectColor.innerHTML =
			`<select placeholder="Цвет кузова" name="colorCar" required>
					<option value="" selected>Цвет кузова</option>
					<option value="Черный">Черный</option>
					<option value="Белый">Белый</option>
					<option value="Красный">Красный</option>`
	} else if (selectModel.value === `F-Type`) {
		selectColor.innerHTML =
			`<select placeholder="Цвет кузова" name="colorCar" required>
					<option value="" selected>Цвет кузова</option>
					<option value="Серый">Серый</option>
					<option value="Белый">Белый</option>
					<option value="Красный">Красный</option>
					<option value="Оранжевый">Оранжевый</option>
					<option value="Желтый">Желтый</option>`
	} else if (selectModel.value === `F-Pace`) {
		selectColor.innerHTML =
			`<select placeholder="Цвет кузова" name="colorCar" required>
					<option value="" selected>Цвет кузова</option>
					<option value="Серый">Серый</option>
					<option value="Белый">Белый</option>
					<option value="Красный">Красный</option>
					<option value="Оранжевый">Оранжевый</option>
					<option value="Синий">Синий</option>`
	} else {
		selectColor.innerHTML =
			`<select placeholder="Цвет кузова" name="colorCar" required>
					<option value="" selected>Цвет кузова</option>
					<option value="Черный">Черный</option>
					<option value="Серый">Серый</option>
					<option value="Белый">Белый</option>
					<option value="Красный">Красный</option>
					<option value="Оранжевый">Оранжевый</option>
					<option value="Желтый">Желтый</option>
					<option value="Синий">Синий</option>
					<option value="Зеленый">Зеленый</option>`
	}
});


// Расширенная валидация марки автомобиля (функция еще не вызывается)
function checkFormValidityBrand() {
	//(если поле пустое (марка не выбрана) - поля блокируются и появляется сообщения об ошибке)
	if (selectBrand.value === "") {
		selectModel.disabled = true;
		selectColor.disabled = true;
		inputRadioFluePetrol.disabled = true;
		inputEngineCapacity.disabled = true;
		inputRadioConditionNew.disabled = true;
		inputRadioConditionUsed.disabled = true;
		inputRadioPaymentCard.disabled = true;
		inputRadioPaymentCash.disabled = true;
		inputRadioPaymentInvoice.disabled = true;
		errorBrand.textContent = `Выберите марку автомобиля`;
		errorBrand.classList.add('error__message');
		selectBrandClass.classList.add('error');
		selectBrandClass.style.margin = "1.875rem 0 1rem 0";
	} else {
		//(если марка выбрана - сообщения об ошибке исчезают и часть полей будет разблокирована)
		selectModel.disabled = false;
		selectColor.disabled = false;
		inputRadioFluePetrol.disabled = false;
		inputEngineCapacity.disabled = false;
		inputRadioConditionNew.disabled = false;
		inputRadioConditionUsed.disabled = false;
		inputRadioPaymentCard.disabled = false;
		inputRadioPaymentCash.disabled = false;
		inputRadioPaymentInvoice.disabled = false;
		errorBrand.textContent = ``;
		errorBrand.classList.remove('error__message');
		selectBrandClass.classList.remove('error');
		selectBrandClass.style.margin = "1.875rem 0";
	}
}

// Расширенная валидация выбора модели авто (функция еще не вызывается)
function checkFormValidityModel() {
	//(если поле пустое - появляются сообщения об ошибке)
	if (selectModel.value === "") {
		errorModel.textContent = `Выберите модель`;
		errorModel.classList.add('error__message');
		selectModelClass.classList.add('error');
		selectModelClass.style.margin = "1.875rem 0 1rem 0";
	} else {
		//(если модель выбрана - сообщения об ошибке исчезают)
		errorModel.textContent = ``;
		errorModel.classList.remove('error__message');
		selectModelClass.classList.remove('error');
		selectModelClass.style.margin = "1.875rem 0 1rem 0";
	}
}

// Расширенная валидация цвета кузова авто (функция еще не вызывается)
function checkFormValidityColor() {
	//(если цвет не выбран - появляются сообщения об ошибке)
	if (selectColor.value === "") {
		errorColor.textContent = `Выберите цвет кузова`;
		errorColor.classList.add('error__message');
		selectColorClass.classList.add('error');
		selectColorClass.style.margin = "1.875rem 0 1rem 0";
	} else {
		//(если цвет выбран - сообщения об ошибке исчезают)
		errorColor.textContent = ``;
		errorColor.classList.remove('error__message');
		selectColorClass.classList.remove('error');
		selectColorClass.style.margin = "1.875rem 0 1rem 0";
	}
}

// Расширенная валидация объема двигателя (функция еще не вызывается)
function checkFormValidityEngineCapacity() {
	//(если поле пустое - появляются сообщения об ошибке)
	if (inputEngineCapacity.value === "") {
		errorEngineCapacity.textContent = `Введите объем двигателя: 1.6, 2 или 3`;
		errorEngineCapacity.classList.add('error__message');
		inputEngineCapacityClass.classList.add('error');
		inputEngineCapacityClass.style.margin = "1.875rem 0 1rem 0";
	} else if (Number(inputEngineCapacity.value) !== 1.6 && Number(inputEngineCapacity.value) !== 2 && Number(inputEngineCapacity.value) !== 3) {
		//(если объем двигателя введен некорректно - появляются сообщения об ошибке)
		errorEngineCapacity.textContent = `Введите объем двигателя: 1.6, 2 или 3`;
		errorEngineCapacity.classList.add('error__message');
		inputEngineCapacityClass.classList.add('error');
		inputEngineCapacityClass.style.margin = "1.875rem 0 1rem 0";
	} else {
		//(если объем двигателя введен корректно - сообщения об ошибке исчезают)
		errorEngineCapacity.textContent = ``;
		errorEngineCapacity.classList.remove('error__message');
		inputEngineCapacityClass.classList.remove('error');
		inputEngineCapacityClass.style.margin = "1.875rem 0 1rem 0";
	}
}

// Расширенная валидация состояния автомобиля (функция еще не вызывается)
function checkFormValidityCondition() {
	if (!inputRadioConditionNew.checked && !inputRadioConditionUsed.checked) {
		//(если состояние автомобиля не выбрано - появляются сообщения об ошибке)
		errorCondition.textContent = `Выберите состояние автомобиля`;
		errorCondition.classList.add('error__message');
		inputConditionClass.style.margin = "1.875rem 0 1rem 0";
	} else {
		//(если состояние выбрано - сообщения об ошибке исчезают)
		errorCondition.textContent = ``;
		errorCondition.classList.remove('error__message');
		inputConditionClass.style.margin = "1.875rem 0 1rem 0";
	}
}

// Расширенная валидация количества владельцев если нужен подержанный автомобиль(функция еще не вызывается)
function checkFormValidityOwnersError() {
	if (inputRadioConditionUsed.checked && !inputRadioCarOwner.checked || inputRadioConditionUsed.checked && !inputRadioCarOwners.checked) {
		//(если ожидаемое количество владельцев не указано - появляются сообщения об ошибке)
		errorOwners.textContent = `Необходимо выбрать количество владельцев`;
		errorOwners.classList.add('error__message');
		inputOwnersClass.style.margin = "1.875rem 0 1rem 0";
	}
}

function checkFormValidityOwners() {
	//(если ожидаемое количество владельцев указано - сообщение об ошибке исчезают)
	if (inputRadioConditionUsed.checked && inputRadioCarOwner.checked || inputRadioConditionUsed.checked && inputRadioCarOwners.checked) {
		errorOwners.textContent = ``;
		errorOwners.classList.remove('error__message');
		inputOwnersClass.style.margin = "1.875rem 0 1rem 0";
	}
}

// Объединение функций валидации для выбора количества владельцев 
function checkFormValidityForOwners() {
	checkFormValidityOwnersError();
	checkFormValidityOwners();
}

// Расширенная валидация способа оплаты (функция еще не вызывается)
function checkFormValidityPayment() {
	if (!inputRadioConditionNew.checked && !inputRadioConditionUsed.checked && !inputRadioConditionUsed.checked) {
		//(если способ оплаты не выбран - появляются сообщения об ошибке)
		errorPayment.textContent = `Выберите способ оплаты`;
		errorPayment.classList.add('error__message');
		inputPaymentClass.style.margin = "1.875rem 0 1rem 0";
	} else {
		//(если способ оплаты выбран - сообщения об ошибке исчезают)
		errorPayment.textContent = ``;
		errorPayment.classList.remove('error__message');
		inputPaymentClass.style.margin = "1.875rem 0 1rem 0";
	}
}


//Проверка на валидность марки автомобиля
//(событие change срабатывает при изменении значения элемента формы (выборе варианта из выпадающего списка))
selectBrand.addEventListener(`change`, checkFormValidityBrand);

//Проверка на валидность модели автомобиля
//(событие change срабатывает при изменении значения элемента формы (выборе варианта из выпадающего списка))
selectModel.addEventListener(`change`, checkFormValidityModel);

//Проверка на валидность цвета автомобиля
//(событие change срабатывает при изменении значения элемента формы (выборе варианта из выпадающего списка))
selectColor.addEventListener(`change`, checkFormValidityColor);


//Добавляем через метод перебора массива стиль при фокусировке выпадающего списка / потере фокуса
selectFocusBlurEvent.forEach(function (select) {
	// Событие focus активируется, когда элемент формы получает фокус
	//добавляем класс focus для поля ввода
	select.addEventListener(`focus`, function () {
		select.style.border = ".125rem solid #7de2f1";
	})
	// Событие blur срабатывает, когда элемент теряет фокус
	//возврат стилей к исходному состоянию
	select.addEventListener(`blur`, function () {
		select.style.border = "";
	});
});


//Проверка на валидность введенного значения объема двигателя
//(событие input срабатывает при вводе или удалении каждого символа)
inputEngineCapacity.addEventListener(`input`, checkFormValidityEngineCapacity);
// Событие focus активируется, когда элемент формы получает фокус
//очищаем placeholder и добавляем класс focus для поля ввода
inputEngineCapacity.addEventListener(`focus`, function (event) {
	inputEngineCapacity.placeholder = "";
	inputEngineCapacityClass.classList.add('focus');
});
// Событие blur срабатывает, когда элемент теряет фокус
//возврат стилей к исходному состоянию
inputEngineCapacity.addEventListener(`blur`, function (event) {
	inputEngineCapacity.placeholder = inputEngineCapacityPlaceholder;
	inputEngineCapacityClass.classList.remove('focus');
});


// Если выбран подержанный автомобиль,
//появляется выбор количества владельцев: 1-2 владельца, более 3-х владельцев
inputRadioConditionUsed.addEventListener(`change`, function (event) {
	if (inputRadioConditionUsed.checked) {
		blockOwnersVisible.style.display = 'block';
	}
});

// Если выбран новый автомобиль,
//пункт выбора количества владельцев скрывается
inputRadioConditionNew.addEventListener(`change`, function (event) {
	if (inputRadioConditionNew.checked) {
		inputRadioCarOwner.checked = false;
		inputRadioCarOwners.checked = false;
		blockOwnersVisible.style.display = 'none';
	}
});

// Проверка на валидность выбранного количества владельцев пользователем
//(событие change срабатывает при изменении значения элемента формы (переключении радиокнопок))
inputRadioCarOwner.addEventListener(`change`, checkFormValidityForOwners);
inputRadioCarOwners.addEventListener(`change`, checkFormValidityForOwners);

// Проверка на валидность выбранного способа оплаты пользователем
//(событие change срабатывает при изменении значения элемента формы (переключении радиокнопок))
inputRadioPaymentCard.addEventListener(`change`, checkFormValidityPayment);
inputRadioPaymentCash.addEventListener(`change`, checkFormValidityPayment);
inputRadioPaymentInvoice.addEventListener(`change`, checkFormValidityPayment);


// Создаем массив с объектами, который содержит в себе цены для каждой новой модели авто
const carModelPrice = [{
	model: 'Duster',
	price: '1868000'
}, {
	model: 'Kaptur',
	price: '1724000'
}, {
	model: 'Astra',
	price: '3200000'
}, {
	model: 'Corsa',
	price: '3100000'
}, {
	model: 'RX8',
	price: '3400000'
}, {
	model: '6',
	price: '4600000'
}, {
	model: 'F-Type',
	price: '7500000'
}, {
	model: 'F-Pace',
	price: '12700000'
}, ];


// Создаем массив с объектами, который содержит в себе коэффициенты надбавки за объем двигателя
const engineCapacityRate = [{
	'1.6': 1
}, {
	'2': 1.4
}, {
	'3': 1.8
}, ]


//Функция расчета стоимости конфигурации автомобиля
const calculateTotalPrice = (model, engineCapacity, conditionNew, conditionUsed) => {
	model = selectModel.value;
	engineCapacity = Number(inputEngineCapacity.value);
	conditionNew = inputRadioConditionNew.value;
	conditionUsed = inputRadioConditionUsed.value;

	//модель
	let modelPrice;
	if (model === 'Duster') {
		modelPrice = Number(carModelPrice[0].price); //Renault Duster
	} else if (model === 'Kaptur') {
		modelPrice = Number(carModelPrice[1].price); //Renault Kaptur
	} else if (model === 'Astra') {
		modelPrice = Number(carModelPrice[2].price); //Opel Astra
	} else if (model === 'Corsa') {
		modelPrice = Number(carModelPrice[3].price); //Opel Corsa
	} else if (model === 'RX8') {
		modelPrice = Number(carModelPrice[4].price); //Mazda RX8
	} else if (model === '6') {
		modelPrice = Number(carModelPrice[5].price); //Mazda 6
	} else if (model === 'F-Type') {
		modelPrice = Number(carModelPrice[6].price); //Jaguar F-Type
	} else if (model === 'F-Pace') {
		modelPrice = Number(carModelPrice[7].price); //Jaguar F-Pace
	}

	//объем двигателя
	let engineCapacityPrice;
	if (engineCapacity === 1.6) {
		engineCapacityPrice = engineCapacityRate[0][1.6];
	} else if (engineCapacity === 2) {
		engineCapacityPrice = engineCapacityRate[1][2];
	} else if (engineCapacity === 3) {
		engineCapacityPrice = engineCapacityRate[2][3];
	}

	//состояние автомобиля
	const newCarPrice = 1;
	const usedCarPriceOwner = 0.8;
	const usedCarPriceOwners = 0.6;

	let conditionPrice;
	if (conditionUsed === 'Подержанный' && inputRadioCarOwner.checked) {
		conditionPrice = usedCarPriceOwner;
	} else if (conditionUsed === 'Подержанный' && inputRadioCarOwners.checked) {
		conditionPrice = usedCarPriceOwners;
	} else if (conditionNew === 'Новый') {
		conditionPrice = newCarPrice;
	}

	//формула расчета стоимости автомобиля (модель*объем двигателя(л)*коэф. состояния авто (0-3 владельца))
	return modelPrice * engineCapacityPrice * conditionPrice;
};

//Функция для дальнейшего вывода способа оплаты в консоль и на экран
const paymentValue = () => {
	if (inputRadioPaymentCard.checked) {
		return inputRadioPaymentCard.value;
	} else if (inputRadioPaymentCash.checked) {
		return inputRadioPaymentCash.value
	} else {
		return inputRadioPaymentInvoice.value
	}
};

//Функция для дальнейшего вывода количества владельцев в консоль и на экран
const ownersValue = () => {
	if (inputRadioCarOwner.checked) {
		return inputRadioCarOwner.value;
	} else if (inputRadioCarOwners.checked) {
		return inputRadioCarOwners.value
	} else {
		return 'Новый';
	}
};

// Функция для дальнейшего вывода фото автомобиля
const imageModelColorCar = () => {
	const blockForImage = document.querySelector(`.image__block`);
	const imageCar = document.createElement(`img`);
	imageCar.style.display = "block"
	imageCar.style.margin = "2rem auto 3rem auto"
	imageCar.style.width = "60%"
	imageCar.style.objectFit = "cover"
	imageCar.style.border = ".125rem solid #333333"
	imageCar.style.borderRadius = "1.25rem"
	if (selectModel.value === "Duster" && selectColor.value === "Черный") {
		imageCar.src = "assets/images/Renault Duster/Renault_Duster_black.jpeg";
	} else if (selectModel.value === "Duster" && selectColor.value === "Белый") {
		imageCar.src = "assets/images/Renault Duster/Renault_Duster_white.jpeg";
	} else if (selectModel.value === "Duster" && selectColor.value === "Оранжевый") {
		imageCar.src = "assets/images/Renault Duster/Renault_Duster_orange.jpeg";
	} else if (selectModel.value === "Duster" && selectColor.value === "Зеленый") {
		imageCar.src = "assets/images/Renault Duster/Renault_Duster_green.jpeg";
	} else if (selectModel.value === "Kaptur" && selectColor.value === "Белый") {
		imageCar.src = "assets/images/Renault Kaptur/Renault_Kaptur_white.jpeg";
	} else if (selectModel.value === "Kaptur" && selectColor.value === "Оранжевый") {
		imageCar.src = "assets/images/Renault Kaptur/Renault_Kaptur_orange.jpeg";
	} else if (selectModel.value === "Kaptur" && selectColor.value === "Синий") {
		imageCar.src = "assets/images/Renault Kaptur/Renault_Kaptur_blue.jpeg";
	} else if (selectModel.value === "Astra" && selectColor.value === "Серый") {
		imageCar.src = "assets/images/Opel Astra/Opel_Astra_grey.jpeg";
	} else if (selectModel.value === "Astra" && selectColor.value === "Красный") {
		imageCar.src = "assets/images/Opel Astra/Opel_Astra_red.jpeg";
	} else if (selectModel.value === "Corsa" && selectColor.value === "Красный") {
		imageCar.src = "assets/images/Opel Corsa/Opel_Corsa_red.jpeg";
	} else if (selectModel.value === "Corsa" && selectColor.value === "Синий") {
		imageCar.src = "assets/images/Opel Corsa/Opel_Corsa_blue.jpeg";
	} else if (selectModel.value === "Corsa" && selectColor.value === "Зеленый") {
		imageCar.src = "assets/images/Opel Corsa/Opel_Corsa_green.jpeg";
	} else if (selectModel.value === "RX8" && selectColor.value === "Серый") {
		imageCar.src = "assets/images/Mazda RX-8/Mazda_RX-8_grey.jpg";
	} else if (selectModel.value === "RX8" && selectColor.value === "Белый") {
		imageCar.src = "assets/images/Mazda RX-8/Mazda_RX-8_white.jpg";
	} else if (selectModel.value === "RX8" && selectColor.value === "Красный") {
		imageCar.src = "assets/images/Mazda RX-8/Mazda_RX-8_red.jpg";
	} else if (selectModel.value === "RX8" && selectColor.value === "Синий") {
		imageCar.src = "assets/images/Mazda RX-8/Mazda_RX-8_blue.jpg";
	} else if (selectModel.value === "6" && selectColor.value === "Черный") {
		imageCar.src = "assets/images/Mazda 6/mazda6_black.jpg";
	} else if (selectModel.value === "6" && selectColor.value === "Белый") {
		imageCar.src = "assets/images/Mazda 6/mazda6_white.jpg";
	} else if (selectModel.value === "6" && selectColor.value === "Красный") {
		imageCar.src = "assets/images/Mazda 6/mazda6_red.jpg";
	} else if (selectModel.value === "F-Type" && selectColor.value === "Серый") {
		imageCar.src = "assets/images/Jaguar F-Type/jaguar_f-type_grey.jpg";
	} else if (selectModel.value === "F-Type" && selectColor.value === "Белый") {
		imageCar.src = "assets/images/Jaguar F-Type/jaguar_f-type_white.jpg";
	} else if (selectModel.value === "F-Type" && selectColor.value === "Красный") {
		imageCar.src = "assets/images/Jaguar F-Type/jaguar_f-type_red.jpg";
	} else if (selectModel.value === "F-Type" && selectColor.value === "Оранжевый") {
		imageCar.src = "assets/images/Jaguar F-Type/jaguar_f-type_orange.jpg";
	} else if (selectModel.value === "F-Type" && selectColor.value === "Желтый") {
		imageCar.src = "assets/images/Jaguar F-Type/jaguar_f-type_yellow.jpg";
	} else if (selectModel.value === "F-Pace" && selectColor.value === "Серый") {
		imageCar.src = "assets/images/Jaguar F-Pace/jaguar_f-pace_grey.jpg";
	} else if (selectModel.value === "F-Pace" && selectColor.value === "Белый") {
		imageCar.src = "assets/images/Jaguar F-Pace/jaguar_f-pace_white.jpg";
	} else if (selectModel.value === "F-Pace" && selectColor.value === "Красный") {
		imageCar.src = "assets/images/Jaguar F-Pace/jaguar_f-pace_red.jpg";
	} else if (selectModel.value === "F-Pace" && selectColor.value === "Оранжевый") {
		imageCar.src = "assets/images/Jaguar F-Pace/jaguar_f-pace_orange.jpg";
	} else if (selectModel.value === "F-Pace" && selectColor.value === "Синий") {
		imageCar.src = "assets/images/Jaguar F-Pace/jaguar_f-pace_blue.jpg";
	}

	blockForImage.appendChild(imageCar)
};


// Проверка на валидность всех введенных данных пользователем
//(событие change срабатывает при изменении значения элемента формы)
mainForm.addEventListener(`change`, function (event) {
	//добавление стилей для кнопки (кнопка станет активной, если нет сообщений об ошибках и значения полей ввода не пусты / отвечают заданным параметрам)
	if (document.querySelectorAll('.error__message').length === 0 &&
		selectModel.value !== "" &&
		selectColor.value !== "" &&
		inputRadioFluePetrol.checked &&
		inputEngineCapacity.value !== "" &&
		(inputRadioConditionNew.checked || inputRadioConditionUsed.checked && inputRadioCarOwner.checked || inputRadioConditionUsed.checked && inputRadioCarOwners.checked) &&
		(inputRadioPaymentCard.checked || inputRadioPaymentCash.checked || inputRadioPaymentInvoice.checked)) {
		submitButton.disabled = false;
		submitButton.style.backgroundColor = "#6ae18f";
		submitButton.style.color = "#FFFFFF";
	} else {
		//возврат стилей к исходному состоянию (кнопка станет неактивной, если есть сообщения об ошибках и значения полей ввода не пусты / отвечают заданным параметрам)
		submitButton.disabled = true;
		submitButton.style.backgroundColor = "#c7baba6f";
		submitButton.style.color = "#33333369";
	}
});


// Повторная на валидность всех введенных данных пользователем
//(событие submit срабатывает при отправке формы)
mainForm.addEventListener('submit', function (event) {
	//предотвращаем перезагрузку страницы и автоматическую отправку данных
	event.preventDefault();
	//вызываем функции валидации
	checkFormValidityBrand();
	checkFormValidityModel();
	checkFormValidityColor();
	checkFormValidityEngineCapacity();
	checkFormValidityCondition();
	checkFormValidityForOwners();
	checkFormValidityPayment();
	calculateTotalPrice();
	imageModelColorCar();

	//добавление стилей для кнопки (кнопка станет активной, если нет сообщений об ошибках и значения полей ввода не пусты / отвечают заданным параметрам)
	if (document.querySelectorAll('.error__message').length === 0 &&
		selectModel.value !== "" &&
		selectColor.value !== "" &&
		inputRadioFluePetrol.checked &&
		inputEngineCapacity.value !== "" &&
		(inputRadioConditionNew.checked || inputRadioConditionUsed.checked && inputRadioCarOwner.checked || inputRadioConditionUsed.checked && inputRadioCarOwners.checked) &&
		(inputRadioPaymentCard.checked || inputRadioPaymentCash.checked || inputRadioPaymentInvoice.checked)) {
		submitButton.disabled = false;
		submitButton.style.backgroundColor = "#FFFFFF";
		submitButton.style.color = "#333333";
		//выводим в консоль значения полей формы после отправки
		console.log({
			Brand: selectBrand.value,
			Model: selectModel.value,
			Color: selectColor.value,
			Flue: inputRadioFluePetrol.value,
			EngineCapacity: inputEngineCapacity.value,
			Condition: inputRadioConditionNew.checked ? 'Новый' : 'Подержанный',
			Owners: ownersValue(),
			Payment: paymentValue(),
		});
		//выводим на экран конфигурацию автомобиля (объект DOM .result)
		result.innerHTML = `
      <p>Марка автомобиля: <span>${selectBrand.value}</span></p>
      <p>Модель: <span>${selectModel.value}</span></p>
      <p>Цвет кузова: <span>${selectColor.value}</span></p>
      <p>Тип топлива: <span>${inputRadioFluePetrol.value}</span></p>
      <p>Объем двигателя: <span>${inputEngineCapacity.value}л</span></p>
      <p>Состояние автомобиля: <span>${ownersValue()}</span></p>
      <p>Cпособ оплаты: <span>${paymentValue()}</span></p>`
		//выводим на экран сумму автомобиля (объект DOM .price)
		const format = new Intl.NumberFormat("ru-RU", {
			style: "currency",
			currency: "RUB"
		}).format(calculateTotalPrice(), );
		price.innerHTML = `
			<p>Стоимость автомобиля в данной конфигурации составит <span>${format}</span></p>`
		//очищаем форму
		mainForm.reset();
		//возврат стилей кнопки к исходному состоянию
		submitButton.style.backgroundColor = "#ffffff6f";
		submitButton.style.color = "#333333";
	}
});