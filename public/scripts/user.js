import { renderBlock } from './lib.js';
export function renderUserBlock(userName, avatarSrc, favoriteItemsAmount) {
    const favoritesCaption = favoriteItemsAmount ? favoriteItemsAmount : 'ничего нет';
    const hasFavoriteItems = favoriteItemsAmount ? true : false;
    renderBlock('user-block', `
    <div class="header-container">
      <img class="avatar" src="${avatarSrc}" alt="${userName} avatar" />
      <div class="info">
          <p class="name">${userName}</p>
          <p class="fav">
            <i class="heart-icon${hasFavoriteItems ? ' active' : ''}"></i>${favoritesCaption}
          </p>
      </div>
    </div>
    `);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxVQUFVLENBQUE7QUFFdEMsTUFBTSxVQUFVLGVBQWUsQ0FBRSxRQUFnQixFQUFFLFNBQWlCLEVBQUUsbUJBQTRCO0lBQ2hHLE1BQU0sZ0JBQWdCLEdBQUcsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUE7SUFDakYsTUFBTSxnQkFBZ0IsR0FBRyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUE7SUFFM0QsV0FBVyxDQUNULFlBQVksRUFDWjs7aUNBRTZCLFNBQVMsVUFBVSxRQUFROzs0QkFFaEMsUUFBUTs7a0NBRUYsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxTQUFTLGdCQUFnQjs7OztLQUl2RixDQUNGLENBQUE7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyQmxvY2sgfSBmcm9tICcuL2xpYi5qcydcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclVzZXJCbG9jayAodXNlck5hbWU6IHN0cmluZywgYXZhdGFyU3JjOiBzdHJpbmcsIGZhdm9yaXRlSXRlbXNBbW91bnQ/OiBudW1iZXIpIHtcbiAgY29uc3QgZmF2b3JpdGVzQ2FwdGlvbiA9IGZhdm9yaXRlSXRlbXNBbW91bnQgPyBmYXZvcml0ZUl0ZW1zQW1vdW50IDogJ9C90LjRh9C10LPQviDQvdC10YInXG4gIGNvbnN0IGhhc0Zhdm9yaXRlSXRlbXMgPSBmYXZvcml0ZUl0ZW1zQW1vdW50ID8gdHJ1ZSA6IGZhbHNlXG5cbiAgcmVuZGVyQmxvY2soXG4gICAgJ3VzZXItYmxvY2snLFxuICAgIGBcbiAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyLWNvbnRhaW5lclwiPlxuICAgICAgPGltZyBjbGFzcz1cImF2YXRhclwiIHNyYz1cIiR7YXZhdGFyU3JjfVwiIGFsdD1cIiR7dXNlck5hbWV9IGF2YXRhclwiIC8+XG4gICAgICA8ZGl2IGNsYXNzPVwiaW5mb1wiPlxuICAgICAgICAgIDxwIGNsYXNzPVwibmFtZVwiPiR7dXNlck5hbWV9PC9wPlxuICAgICAgICAgIDxwIGNsYXNzPVwiZmF2XCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImhlYXJ0LWljb24ke2hhc0Zhdm9yaXRlSXRlbXMgPyAnIGFjdGl2ZScgOiAnJ31cIj48L2k+JHtmYXZvcml0ZXNDYXB0aW9ufVxuICAgICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIGBcbiAgKVxufVxuIl19