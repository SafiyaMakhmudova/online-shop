import { Layouts } from '@/constants/layouts.ts';

export async function layoutMiddleware(route) {
  const { layout } = route.meta;

  const layoutName = layout || Layouts.USER;

  const component = await import(`../../layouts/${layoutName}.vue`);

  route.meta.layoutComponent = component.default;

}
