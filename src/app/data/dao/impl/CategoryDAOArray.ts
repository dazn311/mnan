import {CategoryDAO} from '../interface/CategoryDAO';
import {Observable, of} from 'rxjs';
import {Category} from '../../../model/Category';
import {DataTablesService} from '../../../sevice/data-tables.service';

export class CategoryDAOArray implements CategoryDAO {


  get(id: number): Observable<Category> {
    return undefined;
  }

  getAll(): Observable<Category[]> {
    // return of(DataTablesService.tasks);
    return undefined;
  }


  add(category: Category): Observable<Category> {
    return undefined;
  }

  delete(id: number): Observable<Category> {

    //   // перед удалением - нужно в задачах занулить все ссылки на удаленное значение
    //   // в реальной БД сама обновляет все ссылки (cascade update) - здесь нам приходится делать это вручную (т.к. вместо БД - массив)
    // DataTablesService.tasks.forEach(task => {
    //       if (task.folder && task.folder.id === id) {
    //           task.category = null;
    //       }
    //   });
    //
    //   const tmpCategory = DataTablesService.categories.find(t => t.id === id); // удаляем по id
    // DataTablesService.categories.splice(DataTablesService.categories.indexOf(tmpCategory), 1);
    //
    //   return of(tmpCategory);
    return undefined;
  }

  update(category: Category): Observable<Category> {

    //   const tmpCategory = DataTablesService.categories.find(t => t.id === category.id); // обновляем по id
    // DataTablesService.categories.splice(DataTablesService.categories.indexOf(tmpCategory), 1, category);
    //
    //   return of(tmpCategory);
    return undefined;
  }


  search(title: string): Observable<Category[]> {
    return undefined;
  }


}
