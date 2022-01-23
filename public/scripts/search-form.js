import { renderBlock } from './lib.js';
// import { DateTime } from 'luxon'
export function renderSearchFormBlock(checkInDate, checkOutDate) {
    const formatDate = (date) => {
        const y = date.getFullYear();
        const m = date.getMonth() + 1;
        const d = date.getDate();
        return `${y}-${(m < 10) ? ('0' + m) : m}-${(d < 10) ? ('0' + d) : d}`;
    };
    const minDate = new Date(checkInDate);
    minDate.setDate(minDate.getDate() - 1);
    const maxDate = new Date(checkInDate);
    maxDate.setMonth(maxDate.getMonth() + 2);
    maxDate.setDate(0);
    console.log('cur:', formatDate(minDate));
    console.log('in: ', formatDate(checkInDate));
    console.log('out: ', formatDate(checkOutDate));
    console.log('max: ', formatDate(maxDate));
    renderBlock('search-form-block', `
    <form>
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <!--<div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div>--!>
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">Дата заезда</label>
            <input id="check-in-date" type="date" value="${formatDate(checkInDate)}" min="${formatDate(minDate)}" max="${formatDate(maxDate)}" name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value="${formatDate(checkOutDate)}" min="${formatDate(minDate)}" max="${formatDate(maxDate)}" name="checkout" />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="" name="price" class="max-price" />
          </div>
          <div>
            <div><button id="search-btn">Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZvcm0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VhcmNoLWZvcm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLFVBQVUsQ0FBQTtBQUN0QyxtQ0FBbUM7QUFFbkMsTUFBTSxVQUFVLHFCQUFxQixDQUFFLFdBQVcsRUFBRSxZQUFZO0lBRTlELE1BQU0sVUFBVSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQUU7UUFDMUIsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFBO1FBQzVCLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUE7UUFDN0IsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFBO1FBQ3hCLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQTtJQUN2RSxDQUFDLENBQUE7SUFFRCxNQUFNLE9BQU8sR0FBRyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTtJQUNyQyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQTtJQUV0QyxNQUFNLE9BQU8sR0FBRyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTtJQUNyQyxPQUFPLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQTtJQUN4QyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBRWxCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFBO0lBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFBO0lBQzVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFBO0lBQzlDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFBO0lBQ3pDLFdBQVcsQ0FDVCxtQkFBbUIsRUFDbkI7Ozs7Ozs7Ozs7Ozs7Ozs7OzJEQWlCdUQsVUFBVSxDQUFDLFdBQVcsQ0FBQyxVQUFVLFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBVSxVQUFVLENBQUMsT0FBTyxDQUFDOzs7OzREQUloRixVQUFVLENBQUMsWUFBWSxDQUFDLFVBQVUsVUFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFVLFVBQVUsQ0FBQyxPQUFPLENBQUM7Ozs7Ozs7Ozs7OztLQVl6SSxDQUNGLENBQUE7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyQmxvY2sgfSBmcm9tICcuL2xpYi5qcydcbi8vIGltcG9ydCB7IERhdGVUaW1lIH0gZnJvbSAnbHV4b24nXG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJTZWFyY2hGb3JtQmxvY2sgKGNoZWNrSW5EYXRlLCBjaGVja091dERhdGUpIHtcblxuICBjb25zdCBmb3JtYXREYXRlID0gKGRhdGUpID0+IHtcbiAgICBjb25zdCB5ID0gZGF0ZS5nZXRGdWxsWWVhcigpXG4gICAgY29uc3QgbSA9IGRhdGUuZ2V0TW9udGgoKSArIDFcbiAgICBjb25zdCBkID0gZGF0ZS5nZXREYXRlKClcbiAgICByZXR1cm4gYCR7eX0tJHsobSA8IDEwKSA/ICgnMCcgKyBtKSA6IG19LSR7KGQgPCAxMCkgPyAoJzAnICsgZCkgOiBkfWBcbiAgfVxuICBcbiAgY29uc3QgbWluRGF0ZSA9IG5ldyBEYXRlKGNoZWNrSW5EYXRlKVxuICBtaW5EYXRlLnNldERhdGUobWluRGF0ZS5nZXREYXRlKCkgLSAxKVxuXG4gIGNvbnN0IG1heERhdGUgPSBuZXcgRGF0ZShjaGVja0luRGF0ZSlcbiAgbWF4RGF0ZS5zZXRNb250aChtYXhEYXRlLmdldE1vbnRoKCkgKyAyKVxuICBtYXhEYXRlLnNldERhdGUoMClcblxuICBjb25zb2xlLmxvZygnY3VyOicsIGZvcm1hdERhdGUobWluRGF0ZSkpXG4gIGNvbnNvbGUubG9nKCdpbjogJywgZm9ybWF0RGF0ZShjaGVja0luRGF0ZSkpXG4gIGNvbnNvbGUubG9nKCdvdXQ6ICcsIGZvcm1hdERhdGUoY2hlY2tPdXREYXRlKSlcbiAgY29uc29sZS5sb2coJ21heDogJywgZm9ybWF0RGF0ZShtYXhEYXRlKSlcbiAgcmVuZGVyQmxvY2soXG4gICAgJ3NlYXJjaC1mb3JtLWJsb2NrJyxcbiAgICBgXG4gICAgPGZvcm0+XG4gICAgICA8ZmllbGRzZXQgY2xhc3M9XCJzZWFyY2gtZmlsZWRzZXRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiY2l0eVwiPtCT0L7RgNC+0LQ8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IGlkPVwiY2l0eVwiIHR5cGU9XCJ0ZXh0XCIgZGlzYWJsZWQgdmFsdWU9XCLQodCw0L3QutGCLdCf0LXRgtC10YDQsdGD0YDQs1wiIC8+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIGRpc2FibGVkIHZhbHVlPVwiNTkuOTM4NiwzMC4zMTQxXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8IS0tPGRpdiBjbGFzcz1cInByb3ZpZGVyc1wiPlxuICAgICAgICAgICAgPGxhYmVsPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwicHJvdmlkZXJcIiB2YWx1ZT1cImhvbXlcIiBjaGVja2VkIC8+IEhvbXk8L2xhYmVsPlxuICAgICAgICAgICAgPGxhYmVsPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwicHJvdmlkZXJcIiB2YWx1ZT1cImZsYXQtcmVudFwiIGNoZWNrZWQgLz4gRmxhdFJlbnQ8L2xhYmVsPlxuICAgICAgICAgIDwvZGl2Pi0tIT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNoZWNrLWluLWRhdGVcIj7QlNCw0YLQsCDQt9Cw0LXQt9C00LA8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IGlkPVwiY2hlY2staW4tZGF0ZVwiIHR5cGU9XCJkYXRlXCIgdmFsdWU9XCIke2Zvcm1hdERhdGUoY2hlY2tJbkRhdGUpfVwiIG1pbj1cIiR7Zm9ybWF0RGF0ZShtaW5EYXRlKX1cIiBtYXg9XCIke2Zvcm1hdERhdGUobWF4RGF0ZSl9XCIgbmFtZT1cImNoZWNraW5cIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiY2hlY2stb3V0LWRhdGVcIj7QlNCw0YLQsCDQstGL0LXQt9C00LA8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IGlkPVwiY2hlY2stb3V0LWRhdGVcIiB0eXBlPVwiZGF0ZVwiIHZhbHVlPVwiJHtmb3JtYXREYXRlKGNoZWNrT3V0RGF0ZSl9XCIgbWluPVwiJHtmb3JtYXREYXRlKG1pbkRhdGUpfVwiIG1heD1cIiR7Zm9ybWF0RGF0ZShtYXhEYXRlKX1cIiBuYW1lPVwiY2hlY2tvdXRcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwibWF4LXByaWNlXCI+0JzQsNC60YEuINGG0LXQvdCwINGB0YPRgtC+0Lo8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IGlkPVwibWF4LXByaWNlXCIgdHlwZT1cInRleHRcIiB2YWx1ZT1cIlwiIG5hbWU9XCJwcmljZVwiIGNsYXNzPVwibWF4LXByaWNlXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdj48YnV0dG9uIGlkPVwic2VhcmNoLWJ0blwiPtCd0LDQudGC0Lg8L2J1dHRvbj48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2ZpZWxkc2V0PlxuICAgIDwvZm9ybT5cbiAgICBgXG4gIClcbn1cbiJdfQ==