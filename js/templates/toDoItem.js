/* 
	 template is JSX  

	 React Component 
	 jsx + data

*/
import { toElement } from './../utils/toElement';

function toDoItemTemplate(todo) {
	const template = `
		<section class=" max-w-lg mx-auto my-3 p-2 bg-white shadow-lg rounded-2x1">
			<h2 class="text-3xl font-bold text-center mt-14">${todo.todo}</h2>

			<div class="mx-auto flex flex-wrap justify-center gap-2 mt-6">
					<button>
						<svg
							class="w-5 h-6 stroke-current fill-gray-600 stroke-0 hover:fill-rose-500"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg">
							<g id="Edit">
								<g>
									<path
										d="M3.548,20.938h16.9a.5.5,0,0,0,0-1H3.548a.5.5,0,0,0,0,1Z"></path>
									<path
										d="M9.71,17.18a2.587,2.587,0,0,0,1.12-.65l9.54-9.54a1.75,1.75,0,0,0,0-2.47l-.94-.93a1.788,1.788,0,0,0-2.47,0L7.42,13.12a2.473,2.473,0,0,0-.64,1.12L6.04,17a.737.737,0,0,0,.19.72.767.767,0,0,0,.53.22Zm.41-1.36a1.468,1.468,0,0,1-.67.39l-.97.26-1-1,.26-.97a1.521,1.521,0,0,1,.39-.67l.38-.37,1.99,1.99Zm1.09-1.08L9.22,12.75l6.73-6.73,1.99,1.99Zm8.45-8.45L18.65,7.3,16.66,5.31l1.01-1.02a.748.748,0,0,1,1.06,0l.93.94A.754.754,0,0,1,19.66,6.29Z"></path>
								</g>
							</g>
						</svg>
					</button>
					<button>
						<svg
							class="w-5 h-6 stroke-gray-600/75 fill-gray-600 stroke-0 hover:fill-rose-500"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M12 3c-4.963 0-9 4.038-9 9s4.037 9 9 9 9-4.038 9-9-4.037-9-9-9zm0 16c-3.859 0-7-3.14-7-7s3.141-7 7-7 7 3.14 7 7-3.141 7-7 7zM12.707 12l2.646-2.646c.194-.194.194-.512 0-.707-.195-.194-.513-.194-.707 0l-2.646 2.646-2.646-2.647c-.195-.194-.513-.194-.707 0-.195.195-.195.513 0 .707l2.646 2.647-2.646 2.646c-.195.195-.195.513 0 .707.097.098.225.147.353.147s.256-.049.354-.146l2.646-2.647 2.646 2.646c.098.098.226.147.354.147s.256-.049.354-.146c.194-.194.194-.512 0-.707l-2.647-2.647z"></path>
						</svg>
					</button>
			</div>

				<div class="m-5">
					<p class="text-bold">Category: <span class="text-sm text-gray-600">${todo.category}</span></p>
					<p class="text-bold">Task Status: <span class="text-sm text-gray-600">${todo.status}</span></p>
					<p class="text-bold">Start Date: <span class="text-sm text-gray-600">${todo.start}</span></p>
					<p class="text-bold">Finish Date: <span class="text-sm text-gray-600">${todo.finish}</span></p>
				</div>
		</section>
    `;

	return toElement(template);
}

export { toDoItemTemplate };
