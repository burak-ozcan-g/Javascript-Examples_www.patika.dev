window.addEventListener('load', () => {
	const form = document.querySelector("#new-task-form");
	const input = document.querySelector("#new-task-input");
	const list_el = document.querySelector("#tasks");
	var task_list = [];
	let saved = localStorage.getItem("saved_tasks");
	if (saved) {
		task_list = JSON.parse(localStorage.getItem("saved_tasks"));
		render(task_list);
	}

	function render(e) {
		list_el.innerHTML = ""
		e.forEach(element => {
			const task_el = document.createElement('div');
			task_el.classList.add('task');

			const task_content_el = document.createElement('div');
			task_content_el.classList.add('content');

			task_el.appendChild(task_content_el);

			const task_input_el = document.createElement('input');
			task_input_el.classList.add('text');
			task_input_el.type = 'text';
			task_input_el.value = element;
			task_input_el.setAttribute('readonly', 'readonly');

			task_content_el.appendChild(task_input_el);

			const task_actions_el = document.createElement('div');
			task_actions_el.classList.add('actions');

			const task_edit_el = document.createElement('button');
			task_edit_el.classList.add('edit');
			task_edit_el.innerText = 'Düzenle';

			const task_delete_el = document.createElement('button');
			task_delete_el.classList.add('delete');
			task_delete_el.innerText = 'Sil';

			task_actions_el.appendChild(task_edit_el);
			task_actions_el.appendChild(task_delete_el);

			task_el.appendChild(task_actions_el);

			list_el.appendChild(task_el);
			var task_loc;
			task_edit_el.addEventListener('click', (e) => {
				
				if (task_edit_el.innerText.toLowerCase() == "düzenle") {
					task_edit_el.innerText = "Kaydet";
					task_input_el.removeAttribute("readonly");
					task_input_el.focus();

					for(task_loc = 0; task_loc<task_list.length; task_loc++){						
						if(task_list[task_loc] == task_input_el.value){
							task_list.splice(task_loc,1);
							break;
						}
					}
				} else {
					task_edit_el.innerText = "Düzenle";
					task_input_el.setAttribute("readonly", "readonly");
					task_list.splice(task_loc,0,task_input_el.value) 
					render(task_list)
					localStorage.setItem("saved_tasks", JSON.stringify(task_list));				
				}
			});

			task_delete_el.addEventListener('click', (e) => {
				list_el.removeChild(task_el);
				for(let i = 0; i<task_list.length; i++){	
					if(task_list[i] == task_input_el.value){
						task_list.splice(i,1);
						render(task_list)
						localStorage.setItem("saved_tasks", JSON.stringify(task_list));
						break;
					}
				}
			});
		});

	}

	form.addEventListener('submit', (e) => {
		e.preventDefault();
		let task = input.value;
		if (task == "") {
			alert("Boş değer ekleyemezsiniz!")
			return;
		}else{
			task_list.push(task);
			input.value = "";	
			render(task_list)
			localStorage.setItem("saved_tasks", JSON.stringify(task_list));
		}
	});
});