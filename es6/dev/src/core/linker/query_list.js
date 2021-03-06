import { ListWrapper } from 'angular2/src/facade/collection';
import { getSymbolIterator } from 'angular2/src/facade/lang';
import { EventEmitter } from 'angular2/src/facade/async';
/**
 * An unmodifiable list of items that Angular keeps up to date when the state
 * of the application changes.
 *
 * The type of object that {@link QueryMetadata} and {@link ViewQueryMetadata} provide.
 *
 * Implements an iterable interface, therefore it can be used in both ES6
 * javascript `for (var i of items)` loops as well as in Angular templates with
 * `*ngFor="#i of myList"`.
 *
 * Changes can be observed by subscribing to the changes `Observable`.
 *
 * NOTE: In the future this class will implement an `Observable` interface.
 *
 * ### Example ([live demo](http://plnkr.co/edit/RX8sJnQYl9FWuSCWme5z?p=preview))
 * ```typescript
 * @Component({...})
 * class Container {
 *   constructor(@Query(Item) items: QueryList<Item>) {
 *     items.changes.subscribe(_ => console.log(items.length));
 *   }
 * }
 * ```
 */
export class QueryList {
    constructor() {
        this._results = [];
        this._emitter = new EventEmitter();
    }
    get changes() { return this._emitter; }
    get length() { return this._results.length; }
    get first() { return ListWrapper.first(this._results); }
    get last() { return ListWrapper.last(this._results); }
    /**
     * returns a new array with the passed in function applied to each element.
     */
    map(fn) { return this._results.map(fn); }
    /**
     * returns a filtered array.
     */
    filter(fn) { return this._results.filter(fn); }
    /**
     * returns a reduced value.
     */
    reduce(fn, init) { return this._results.reduce(fn, init); }
    /**
     * executes function for each element in a query.
     */
    forEach(fn) { this._results.forEach(fn); }
    /**
     * converts QueryList into an array
     */
    toArray() { return ListWrapper.clone(this._results); }
    [getSymbolIterator()]() { return this._results[getSymbolIterator()](); }
    toString() { return this._results.toString(); }
    /**
     * @internal
     */
    reset(res) { this._results = res; }
    /** @internal */
    notifyOnChanges() { this._emitter.emit(this); }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnlfbGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFuZ3VsYXIyL3NyYy9jb3JlL2xpbmtlci9xdWVyeV9saXN0LnRzIl0sIm5hbWVzIjpbIlF1ZXJ5TGlzdCIsIlF1ZXJ5TGlzdC5jb25zdHJ1Y3RvciIsIlF1ZXJ5TGlzdC5jaGFuZ2VzIiwiUXVlcnlMaXN0Lmxlbmd0aCIsIlF1ZXJ5TGlzdC5maXJzdCIsIlF1ZXJ5TGlzdC5sYXN0IiwiUXVlcnlMaXN0Lm1hcCIsIlF1ZXJ5TGlzdC5maWx0ZXIiLCJRdWVyeUxpc3QucmVkdWNlIiwiUXVlcnlMaXN0LmZvckVhY2giLCJRdWVyeUxpc3QudG9BcnJheSIsIlF1ZXJ5TGlzdFtnZXRTeW1ib2xJdGVyYXRvcigpXSIsIlF1ZXJ5TGlzdC50b1N0cmluZyIsIlF1ZXJ5TGlzdC5yZXNldCIsIlF1ZXJ5TGlzdC5ub3RpZnlPbkNoYW5nZXMiXSwibWFwcGluZ3MiOiJPQUFPLEVBQUMsV0FBVyxFQUFhLE1BQU0sZ0NBQWdDO09BQy9ELEVBQUMsaUJBQWlCLEVBQUMsTUFBTSwwQkFBMEI7T0FDbkQsRUFBYSxZQUFZLEVBQUMsTUFBTSwyQkFBMkI7QUFHbEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBdUJHO0FBQ0g7SUFBQUE7UUFDVUMsYUFBUUEsR0FBYUEsRUFBRUEsQ0FBQ0E7UUFDeEJBLGFBQVFBLEdBQUdBLElBQUlBLFlBQVlBLEVBQUVBLENBQUNBO0lBMkN4Q0EsQ0FBQ0E7SUF6Q0NELElBQUlBLE9BQU9BLEtBQXNCRSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUN4REYsSUFBSUEsTUFBTUEsS0FBYUcsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFDckRILElBQUlBLEtBQUtBLEtBQVFJLE1BQU1BLENBQUNBLFdBQVdBLENBQUNBLEtBQUtBLENBQUNBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO0lBQzNESixJQUFJQSxJQUFJQSxLQUFRSyxNQUFNQSxDQUFDQSxXQUFXQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUV6REw7O09BRUdBO0lBQ0hBLEdBQUdBLENBQUlBLEVBQWtCQSxJQUFTTSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxHQUFHQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUVqRU47O09BRUdBO0lBQ0hBLE1BQU1BLENBQUNBLEVBQXdCQSxJQUFTTyxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxNQUFNQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUUxRVA7O09BRUdBO0lBQ0hBLE1BQU1BLENBQUlBLEVBQTBCQSxFQUFFQSxJQUFPQSxJQUFPUSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxNQUFNQSxDQUFDQSxFQUFFQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUU1RlI7O09BRUdBO0lBQ0hBLE9BQU9BLENBQUNBLEVBQXFCQSxJQUFVUyxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxPQUFPQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUVuRVQ7O09BRUdBO0lBQ0hBLE9BQU9BLEtBQVVVLE1BQU1BLENBQUNBLFdBQVdBLENBQUNBLEtBQUtBLENBQUNBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO0lBRTNEVixDQUFDQSxpQkFBaUJBLEVBQUVBLENBQUNBLEtBQVVXLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLGlCQUFpQkEsRUFBRUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFFN0VYLFFBQVFBLEtBQWFZLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLFFBQVFBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBO0lBRXZEWjs7T0FFR0E7SUFDSEEsS0FBS0EsQ0FBQ0EsR0FBUUEsSUFBVWEsSUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFFOUNiLGdCQUFnQkE7SUFDaEJBLGVBQWVBLEtBQVdjLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO0FBQ3ZEZCxDQUFDQTtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtMaXN0V3JhcHBlciwgTWFwV3JhcHBlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9jb2xsZWN0aW9uJztcbmltcG9ydCB7Z2V0U3ltYm9sSXRlcmF0b3J9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvbGFuZyc7XG5pbXBvcnQge09ic2VydmFibGUsIEV2ZW50RW1pdHRlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9hc3luYyc7XG5cblxuLyoqXG4gKiBBbiB1bm1vZGlmaWFibGUgbGlzdCBvZiBpdGVtcyB0aGF0IEFuZ3VsYXIga2VlcHMgdXAgdG8gZGF0ZSB3aGVuIHRoZSBzdGF0ZVxuICogb2YgdGhlIGFwcGxpY2F0aW9uIGNoYW5nZXMuXG4gKlxuICogVGhlIHR5cGUgb2Ygb2JqZWN0IHRoYXQge0BsaW5rIFF1ZXJ5TWV0YWRhdGF9IGFuZCB7QGxpbmsgVmlld1F1ZXJ5TWV0YWRhdGF9IHByb3ZpZGUuXG4gKlxuICogSW1wbGVtZW50cyBhbiBpdGVyYWJsZSBpbnRlcmZhY2UsIHRoZXJlZm9yZSBpdCBjYW4gYmUgdXNlZCBpbiBib3RoIEVTNlxuICogamF2YXNjcmlwdCBgZm9yICh2YXIgaSBvZiBpdGVtcylgIGxvb3BzIGFzIHdlbGwgYXMgaW4gQW5ndWxhciB0ZW1wbGF0ZXMgd2l0aFxuICogYCpuZ0Zvcj1cIiNpIG9mIG15TGlzdFwiYC5cbiAqXG4gKiBDaGFuZ2VzIGNhbiBiZSBvYnNlcnZlZCBieSBzdWJzY3JpYmluZyB0byB0aGUgY2hhbmdlcyBgT2JzZXJ2YWJsZWAuXG4gKlxuICogTk9URTogSW4gdGhlIGZ1dHVyZSB0aGlzIGNsYXNzIHdpbGwgaW1wbGVtZW50IGFuIGBPYnNlcnZhYmxlYCBpbnRlcmZhY2UuXG4gKlxuICogIyMjIEV4YW1wbGUgKFtsaXZlIGRlbW9dKGh0dHA6Ly9wbG5rci5jby9lZGl0L1JYOHNKblFZbDlGV3VTQ1dtZTV6P3A9cHJldmlldykpXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBAQ29tcG9uZW50KHsuLi59KVxuICogY2xhc3MgQ29udGFpbmVyIHtcbiAqICAgY29uc3RydWN0b3IoQFF1ZXJ5KEl0ZW0pIGl0ZW1zOiBRdWVyeUxpc3Q8SXRlbT4pIHtcbiAqICAgICBpdGVtcy5jaGFuZ2VzLnN1YnNjcmliZShfID0+IGNvbnNvbGUubG9nKGl0ZW1zLmxlbmd0aCkpO1xuICogICB9XG4gKiB9XG4gKiBgYGBcbiAqL1xuZXhwb3J0IGNsYXNzIFF1ZXJ5TGlzdDxUPiB7XG4gIHByaXZhdGUgX3Jlc3VsdHM6IEFycmF5PFQ+ID0gW107XG4gIHByaXZhdGUgX2VtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgZ2V0IGNoYW5nZXMoKTogT2JzZXJ2YWJsZTxhbnk+IHsgcmV0dXJuIHRoaXMuX2VtaXR0ZXI7IH1cbiAgZ2V0IGxlbmd0aCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fcmVzdWx0cy5sZW5ndGg7IH1cbiAgZ2V0IGZpcnN0KCk6IFQgeyByZXR1cm4gTGlzdFdyYXBwZXIuZmlyc3QodGhpcy5fcmVzdWx0cyk7IH1cbiAgZ2V0IGxhc3QoKTogVCB7IHJldHVybiBMaXN0V3JhcHBlci5sYXN0KHRoaXMuX3Jlc3VsdHMpOyB9XG5cbiAgLyoqXG4gICAqIHJldHVybnMgYSBuZXcgYXJyYXkgd2l0aCB0aGUgcGFzc2VkIGluIGZ1bmN0aW9uIGFwcGxpZWQgdG8gZWFjaCBlbGVtZW50LlxuICAgKi9cbiAgbWFwPFU+KGZuOiAoaXRlbTogVCkgPT4gVSk6IFVbXSB7IHJldHVybiB0aGlzLl9yZXN1bHRzLm1hcChmbik7IH1cblxuICAvKipcbiAgICogcmV0dXJucyBhIGZpbHRlcmVkIGFycmF5LlxuICAgKi9cbiAgZmlsdGVyKGZuOiAoaXRlbTogVCkgPT4gYm9vbGVhbik6IFRbXSB7IHJldHVybiB0aGlzLl9yZXN1bHRzLmZpbHRlcihmbik7IH1cblxuICAvKipcbiAgICogcmV0dXJucyBhIHJlZHVjZWQgdmFsdWUuXG4gICAqL1xuICByZWR1Y2U8VT4oZm46IChhY2M6IFUsIGl0ZW06IFQpID0+IFUsIGluaXQ6IFUpOiBVIHsgcmV0dXJuIHRoaXMuX3Jlc3VsdHMucmVkdWNlKGZuLCBpbml0KTsgfVxuXG4gIC8qKlxuICAgKiBleGVjdXRlcyBmdW5jdGlvbiBmb3IgZWFjaCBlbGVtZW50IGluIGEgcXVlcnkuXG4gICAqL1xuICBmb3JFYWNoKGZuOiAoaXRlbTogVCkgPT4gdm9pZCk6IHZvaWQgeyB0aGlzLl9yZXN1bHRzLmZvckVhY2goZm4pOyB9XG5cbiAgLyoqXG4gICAqIGNvbnZlcnRzIFF1ZXJ5TGlzdCBpbnRvIGFuIGFycmF5XG4gICAqL1xuICB0b0FycmF5KCk6IFRbXSB7IHJldHVybiBMaXN0V3JhcHBlci5jbG9uZSh0aGlzLl9yZXN1bHRzKTsgfVxuXG4gIFtnZXRTeW1ib2xJdGVyYXRvcigpXSgpOiBhbnkgeyByZXR1cm4gdGhpcy5fcmVzdWx0c1tnZXRTeW1ib2xJdGVyYXRvcigpXSgpOyB9XG5cbiAgdG9TdHJpbmcoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuX3Jlc3VsdHMudG9TdHJpbmcoKTsgfVxuXG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIHJlc2V0KHJlczogVFtdKTogdm9pZCB7IHRoaXMuX3Jlc3VsdHMgPSByZXM7IH1cblxuICAvKiogQGludGVybmFsICovXG4gIG5vdGlmeU9uQ2hhbmdlcygpOiB2b2lkIHsgdGhpcy5fZW1pdHRlci5lbWl0KHRoaXMpOyB9XG59XG4iXX0=