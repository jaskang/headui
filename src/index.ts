import type { Plugin } from 'vue'
import { Anchor, type IAnchorItem } from './Anchor'
import { Avatar } from './Avatar'
import { Badge } from './Badge'
import { default as Button } from './Button/index.vue'
import { Checkbox, CheckboxGroup } from './Checkbox'
import { Input } from './Input'
import { NavigationMenu } from './NavigationMenu'
import { default as Popover } from './Popover/index.vue'
import { Radio, RadioCard, RadioGroup } from './Radio'
import { ScrollArea } from './ScrollArea'
import { Select } from './Select'
import { Sheet } from './Sheet'
import { Sidebar } from './Sidebar'
import { default as SpaceCompact } from './Space/SpaceCompact.vue'
import { Switch } from './Switch'
import { Tabs } from './Tab'
import { Textarea } from './Textarea'
import { default as Tooltip } from './Tooltip/index.vue'

export {
  Anchor,
  Avatar,
  Badge,
  // components
  Button,
  Checkbox,
  CheckboxGroup,
  Input,
  NavigationMenu,
  Popover,
  Radio,
  RadioCard,
  RadioGroup,
  ScrollArea,
  Select,
  Sheet,
  Sidebar,
  SpaceCompact,
  Switch,
  Tabs,
  Textarea,
  Tooltip,
}

export type { IAnchorItem }
export const plugin: Plugin = {
  install(app, ...options) {
    app.component(Button.name!, Button)
    app.component(Checkbox.name!, Checkbox)
    app.component(CheckboxGroup.name!, CheckboxGroup)
    app.component(Badge.name!, Badge)
    app.component(Radio.name!, Radio)
    app.component(RadioCard.name!, RadioCard)
    app.component(RadioGroup.name!, RadioGroup)
    app.component(Avatar.name!, Avatar)
    app.component(Anchor.name!, Anchor)
    app.component(ScrollArea.name!, ScrollArea)
    app.component(Input.name!, Input)
    app.component(Select.name!, Select)
    app.component(Switch.name!, Switch)
    app.component(Popover.name!, Popover)
    app.component(Tooltip.name!, Tooltip)
    app.component(SpaceCompact.name!, SpaceCompact)
    app.component(Tabs.name!, Tabs)
    app.component(Textarea.name!, Textarea)
    app.component(NavigationMenu.name!, NavigationMenu)
    app.component(Sidebar.name!, Sidebar)
    app.component(Sheet.name!, Sheet)
  },
}
