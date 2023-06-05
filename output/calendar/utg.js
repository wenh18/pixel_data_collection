var utg = 
{
  "nodes": [
    {
      "id": "01db27677da5cf73bd556753fd21073d1076a906a92e2a0bb8e18ea0b0677b04",
      "shape": "image",
      "image": "states/screen_2023-06-05_104428.png",
      "label": "QuickstepLauncher\n<FIRST>",
      "package": "com.android.launcher3",
      "activity": ".uioverrides.QuickstepLauncher",
      "state_str": "01db27677da5cf73bd556753fd21073d1076a906a92e2a0bb8e18ea0b0677b04",
      "structure_str": "576c81d4a5f370c48628804efc01be95",
      "title": "<table class=\"table\">\n<tr><th>package</th><td>com.android.launcher3</td></tr>\n<tr><th>activity</th><td>.uioverrides.QuickstepLauncher</td></tr>\n<tr><th>state_str</th><td>01db27677da5cf73bd556753fd21073d1076a906a92e2a0bb8e18ea0b0677b04</td></tr>\n<tr><th>structure_str</th><td>576c81d4a5f370c48628804efc01be95</td></tr>\n</table>",
      "content": "com.android.launcher3\n.uioverrides.QuickstepLauncher\n01db27677da5cf73bd556753fd21073d1076a906a92e2a0bb8e18ea0b0677b04\ncom.android.launcher3:id/hotseat,android:id/content,com.android.launcher3:id/drag_layer,com.android.launcher3:id/apps_view,com.android.launcher3:id/page_indicator,com.android.launcher3:id/scrim_view,com.android.launcher3:id/qsb_widget,com.android.quicksearchbox:id/search_icon,com.android.quicksearchbox:id/search_widget_text,com.android.quicksearchbox:id/search_plate,com.android.launcher3:id/launcher,com.android.launcher3:id/all_apps_header,com.android.launcher3:id/workspace,com.android.launcher3:id/fast_scroller_popup,com.android.launcher3:id/search_container_workspace\nMaps,Messaging,Phone,Camera,Gallery,WebView Browser Tester",
      "font": "14px Arial red"
    },
    {
      "id": "8fea277c4c5d2bbe4cac9b0a8d27b28b11c349da594c87e60393b06bc95ec52e",
      "shape": "image",
      "image": "states/screen_2023-06-05_104431.png",
      "label": "MainActivity\n<LAST>",
      "package": "com.simplemobiletools.calendar.pro",
      "activity": ".activities.MainActivity",
      "state_str": "8fea277c4c5d2bbe4cac9b0a8d27b28b11c349da594c87e60393b06bc95ec52e",
      "structure_str": "3d36e0d2fbb76443d6eee53dbf53311d",
      "title": "<table class=\"table\">\n<tr><th>package</th><td>com.simplemobiletools.calendar.pro</td></tr>\n<tr><th>activity</th><td>.activities.MainActivity</td></tr>\n<tr><th>state_str</th><td>8fea277c4c5d2bbe4cac9b0a8d27b28b11c349da594c87e60393b06bc95ec52e</td></tr>\n<tr><th>structure_str</th><td>3d36e0d2fbb76443d6eee53dbf53311d</td></tr>\n</table>",
      "content": "com.simplemobiletools.calendar.pro\n.activities.MainActivity\n8fea277c4c5d2bbe4cac9b0a8d27b28b11c349da594c87e60393b06bc95ec52e\ncom.simplemobiletools.calendar.pro:id/top_toolbar,com.simplemobiletools.calendar.pro:id/top_left_arrow,android:id/statusBarBackground,com.simplemobiletools.calendar.pro:id/main_holder,com.simplemobiletools.calendar.pro:id/change_view,com.simplemobiletools.calendar.pro:id/action_bar_root,com.simplemobiletools.calendar.pro:id/month_view,com.simplemobiletools.calendar.pro:id/top_value,android:id/navigationBarBackground,com.simplemobiletools.calendar.pro:id/swipe_refresh_layout,com.simplemobiletools.calendar.pro:id/calendar_fab,com.simplemobiletools.calendar.pro:id/main_coordinator,com.simplemobiletools.calendar.pro:id/top_toolbar_search,com.simplemobiletools.calendar.pro:id/month_view_wrapper,com.simplemobiletools.calendar.pro:id/top_toolbar_search_icon,com.simplemobiletools.calendar.pro:id/month_calendar_holder,com.simplemobiletools.calendar.pro:id/settings,android:id/content,com.simplemobiletools.calendar.pro:id/calendar_coordinator,com.simplemobiletools.calendar.pro:id/top_app_bar_layout,com.simplemobiletools.calendar.pro:id/quick_event_type_filter,com.simplemobiletools.calendar.pro:id/month_view_background,com.simplemobiletools.calendar.pro:id/fragments_holder,com.simplemobiletools.calendar.pro:id/top_toolbar_holder,com.simplemobiletools.calendar.pro:id/top_right_arrow,com.simplemobiletools.calendar.pro:id/main_menu\nJune,May,July,Search",
      "font": "14px Arial red"
    }
  ],
  "edges": [
    {
      "from": "01db27677da5cf73bd556753fd21073d1076a906a92e2a0bb8e18ea0b0677b04",
      "to": "8fea277c4c5d2bbe4cac9b0a8d27b28b11c349da594c87e60393b06bc95ec52e",
      "id": "01db27677da5cf73bd556753fd21073d1076a906a92e2a0bb8e18ea0b0677b04-->8fea277c4c5d2bbe4cac9b0a8d27b28b11c349da594c87e60393b06bc95ec52e",
      "title": "<table class=\"table\">\n<tr><th>1</th><td>IntentEvent(intent='am start com.simplemobiletools.calendar.pro/com.simplemobiletools.calendar.pro.activities.SplashActivity.Orange')</td></tr>\n</table>",
      "label": "1",
      "events": [
        {
          "event_str": "IntentEvent(intent='am start com.simplemobiletools.calendar.pro/com.simplemobiletools.calendar.pro.activities.SplashActivity.Orange')",
          "event_id": 1,
          "event_type": "intent",
          "view_images": []
        }
      ]
    }
  ],
  "num_nodes": 2,
  "num_edges": 1,
  "num_effective_events": 1,
  "num_reached_activities": 1,
  "test_date": "2023-06-05 10:44:21",
  "time_spent": 9.961919,
  "num_transitions": 1,
  "device_serial": "emulator-5554",
  "device_model_number": "Android SDK built for x86",
  "device_sdk_version": 30,
  "app_sha256": "8d80b9fca11301e421eab83ad27278009c194e73e440dd97cfef0f3bcc3e3d11",
  "app_package": "com.simplemobiletools.calendar.pro",
  "app_main_activity": "com.simplemobiletools.calendar.pro.activities.SplashActivity.Orange",
  "app_num_total_activities": 17
}