/* 
     template is JSX  

     React Component 
     jsx + data
*/
import { toElement } from './../utils/toElement';

function toDoItemTemplate(todo) {
	const template = `
    <section class="bg-zinc-50 border-l-4 shadow-sm p-4">
        <h2 class="font-semibold">${todo}</h2>
        <p class="text-sm text-gray-600">Category: ${todo.category}</p>
        <p class="text-sm text-gray-600">Status: ${todo.status}</p>
        <p class="text-sm text-gray-600">Start: ${todo.start}</p>
        <p class="text-sm text-gray-600">Finish: ${todo.finish}</p>
    </section>
    `;

	return toElement(template);
}

export { toDoItemTemplate };
