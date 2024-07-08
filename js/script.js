//1 Ищем объекты формы в HTML документе для дальнейшего взаимодействия.
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

const errorBrand = document.querySelector(`.error__brand`);
const errorEngineCapacity = document.querySelector(`.error__engine-capacity`);

const selectBrandClass = document.querySelector(`.input__box-brand`);
const selectModelClass = document.querySelector(`.input__box-model`);
const selectColorClass = document.querySelector(`.input__box-color`);
const inputFlueClass = document.querySelector(`.input__box-radio--flue`);
const inputEngineCapacityClass = document.querySelector(`.input__box-engine--capacity`);
const inputConditionClass = document.querySelector(`.input__box-radio--condition`);
const inputOwnersClass = document.querySelector(`.input__box-radio--owners`);
const inputPaymentClass = document.querySelector(`.input__box-radio-payment`);

//4 Создаем массив с объектами, который содержит в себе цены для каждой новой модели авто
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


//5 Корректировка выпадающего списка моделей авто при выборе определенной марки
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


//4 Если выбран подержанный автомобиль,
//появляется выбор количества владельцев: 1-2 владельца, более 3-х владельцев
inputRadioConditionUsed.addEventListener(`change`, function (event) {
	if (inputRadioConditionUsed.checked) {
		blockOwnersVisible.style.display = 'block';
	}
});

//5 Если выбран новый автомобиль,
//пункт выбора количества владельцев скрывается
inputRadioConditionNew.addEventListener(`change`, function (event) {
	if (inputRadioConditionNew.checked) {
		blockOwnersVisible.style.display = 'none';
	}
});


//6 Расширенная валидация профессии пользователя (функция еще не вызывается)
function checkFormValidityBrand() {
	//(если поле пустое (профессия не выбрана) - появляются сообщения об ошибке)
	if (selectBrand.value === "") {
		selectModel.disabled = true;
		selectColor.disabled = true;
		inputRadioFluePetrol.disabled = true;
		inputRadioFlueDiesel.disabled = true;
		inputRadioFlueGas.disabled = true;
		inputRadioFlueElectricity.disabled = true;
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
		//(если профессия выбрана - сообщения об ошибке исчезают)
		selectModel.disabled = false;
		selectColor.disabled = false;
		inputRadioFluePetrol.disabled = false;
		inputRadioFlueDiesel.disabled = true;
		inputRadioFlueGas.disabled = true;
		inputRadioFlueElectricity.disabled = true;
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
		const labelFlueDiesel = document.querySelector(`.label__diesel`);
		labelFlueDiesel.style.color = "grey";
		const labelFlueGas = document.querySelector(`.label__gas`);
		labelFlueGas.style.color = "grey";
		const labelElectricity = document.querySelector(`.label__electricity`);
		labelElectricity.style.color = "grey";
	}
}

//5 Корректировка выпадающего списка моделей авто при выборе определенной марки и модели
selectModel.addEventListener(`change`, function (event) {
	if (selectModel.value === `Duster`) {
		selectColor.innerHTML =
			`<select placeholder="Цвет кузова" name="colorCar" required>
					<option value="" selected>Цвет кузова</option>
					<option value="black">Черный</option>
					<option value="white">Белый</option>
					<option value="orange">Оранжевый</option>
					<option value="green">Зеленый</option>`
	} else if (selectModel.value === `Kaptur`) {
		selectColor.innerHTML =
			`<select placeholder="Цвет кузова" name="colorCar" required>
					<option value="" selected>Цвет кузова</option>
					<option value="white">Белый</option>
					<option value="orange">Оранжевый</option>
					<option value="blue">Синий</option>`
	} else if (selectModel.value === `Astra`) {
		selectColor.innerHTML =
			`<select placeholder="Цвет кузова" name="colorCar" required>
					<option value="" selected>Цвет кузова</option>
					<option value="grey">Серый</option>
					<option value="red">Красный</option>`
	} else if (selectModel.value === `Corsa`) {
		selectColor.innerHTML =
			`<select placeholder="Цвет кузова" name="colorCar" required>
					<option value="" selected>Цвет кузова</option>
					<option value="red">Красный</option>
					<option value="blue">Синий</option>
					<option value="green">Зеленый</option>`
	} else if (selectModel.value === `RX8`) {
		selectColor.innerHTML =
			`<select placeholder="Цвет кузова" name="colorCar" required>
					<option value="" selected>Цвет кузова</option>
					<option value="grey">Серый</option>
					<option value="white">Белый</option>
					<option value="red">Красный</option>
					<option value="blue">Синий</option>`
	} else if (selectModel.value === `6`) {
		selectColor.innerHTML =
			`<select placeholder="Цвет кузова" name="colorCar" required>
					<option value="" selected>Цвет кузова</option>
					<option value="black">Черный</option>
					<option value="white">Белый</option>
					<option value="red">Красный</option>`
	} else if (selectModel.value === `F-Type`) {
		selectColor.innerHTML =
			`<select placeholder="Цвет кузова" name="colorCar" required>
					<option value="" selected>Цвет кузова</option>
					<option value="grey">Серый</option>
					<option value="white">Белый</option>
					<option value="red">Красный</option>
					<option value="orange">Оранжевый</option>
					<option value="yellow">Желтый</option>`
	} else if (selectModel.value === `F-Pace`) {
		selectColor.innerHTML =
			`<select placeholder="Цвет кузова" name="colorCar" required>
					<option value="" selected>Цвет кузова</option>
					<option value="grey">Серый</option>
					<option value="white">Белый</option>
					<option value="red">Красный</option>
					<option value="orange">Оранжевый</option>
					<option value="blue">Синий</option>`
	} else {
		selectColor.innerHTML =
			`<select placeholder="Цвет кузова" name="colorCar" required>
					<option value="" selected>Цвет кузова</option>
					<option value="black">Черный</option>
					<option value="grey">Серый</option>
					<option value="white">Белый</option>
					<option value="red">Красный</option>
					<option value="orange">Оранжевый</option>
					<option value="yellow">Желтый</option>
					<option value="blue">Синий</option>
					<option value="green">Зеленый</option>`
	}
});

//9 Расширенная валидация возраста пользователя (функция еще не вызывается)
function checkFormValidityEngineCapacity() {
	//(если поле пустое - появляются сообщения об ошибке)
	if (inputEngineCapacity.value === "") {
		errorEngineCapacity.textContent = `Введите объем двигателя: 1.6, 2 или 3`;
		errorEngineCapacity.classList.add('error__message');
		inputEngineCapacityClass.classList.add('error');
		inputEngineCapacityClass.style.margin = "1.875rem 0 1rem 0";
	} else if (Number(inputEngineCapacity.value) !== 1.6 && Number(inputEngineCapacity.value) !== 2 && Number(inputEngineCapacity.value) !== 3) {
		//(если возраст введен некорректно - появляются сообщения об ошибке)
		errorEngineCapacity.textContent = `Введите объем двигателя: 1.6, 2 или 3`;
		errorEngineCapacity.classList.add('error__message');
		inputEngineCapacityClass.classList.add('error');
		inputEngineCapacityClass.style.margin = "1.875rem 0 1rem 0";
	} else {
		//(если возраст введен корректно - сообщения об ошибке исчезают)
		errorEngineCapacity.textContent = ``;
		errorEngineCapacity.classList.remove('error__message');
		inputEngineCapacityClass.classList.remove('error');
		inputEngineCapacityClass.style.margin = "1.875rem 0 1rem 0";
	}
}

//15 Событие focus активируется, когда элемент формы получает фокус
//очищаем placeholder и добавляем класс focus для поля ввода
selectBrand.addEventListener(`focus`, function (event) {
	selectBrandClass.classList.add('focus');
});
//16 Событие blur срабатывает, когда элемент теряет фокус
//возврат стилей к исходному состоянию
selectBrand.addEventListener(`blur`, function (event) {
	selectBrandClass.classList.remove('focus');
});

//15 Событие focus активируется, когда элемент формы получает фокус
//очищаем placeholder и добавляем класс focus для поля ввода
selectModel.addEventListener(`focus`, function (event) {
	selectModelClass.classList.add('focus');
});
//16 Событие blur срабатывает, когда элемент теряет фокус
//возврат стилей к исходному состоянию
selectModel.addEventListener(`blur`, function (event) {
	selectModelClass.classList.remove('focus');
});

//15 Событие focus активируется, когда элемент формы получает фокус
//очищаем placeholder и добавляем класс focus для поля ввода
selectColor.addEventListener(`focus`, function (event) {
	selectColorClass.classList.add('focus');
});
//16 Событие blur срабатывает, когда элемент теряет фокус
//возврат стилей к исходному состоянию
selectColor.addEventListener(`blur`, function (event) {
	selectColorClass.classList.remove('focus');
});

//15 Событие focus активируется, когда элемент формы получает фокус
//очищаем placeholder и добавляем класс focus для поля ввода
inputEngineCapacity.addEventListener(`focus`, function (event) {
	inputEngineCapacity.placeholder = "";
	inputEngineCapacityClass.classList.add('focus');
});
//16 Событие blur срабатывает, когда элемент теряет фокус
//возврат стилей к исходному состоянию
inputEngineCapacity.addEventListener(`blur`, function (event) {
	inputEngineCapacity.placeholder = inputEngineCapacityPlaceholder;
	inputEngineCapacityClass.classList.remove('focus');
});




mainForm.addEventListener(`change`, checkFormValidityBrand);
mainForm.addEventListener(`change`, checkFormValidityEngineCapacity);