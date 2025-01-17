export const darkTheme:any = {
  base: "vs-dark",
  inherit: true,
  rules: [
    { token: "bracket.curly.pair.text.color", foreground: "#fdba74", fontStyle: "bold" }, // {{variable}}
    { token: "bracket.curly.pair.string.text.color", foreground: "#fdba74", fontStyle: "italic" }, // "{{variable}}"
    { token: "bracket.curly.not.text.color", foreground: "#fa6b8d", fontStyle: "bold" }, // {!variable!}

    { token: "", foreground: "f3f4f6", background: "#000000" },
    { token: "invalid", foreground: "#cd3131" },
    { token: "emphasis", fontStyle: "italic" },
    { token: "strong", fontStyle: "bold" },

    { token: "variable", foreground: "#7dd3fc" },
    { token: "variable.predefined", foreground: "#7dd3fc" },
    { token: "variable.javascript", foreground: "#7dd3fc" },

    { token: "identifier", foreground: "#e879f9" },
    { token: "identifier.const", foreground: "#e879f9" },

    { token: "constant", foreground: "#7dd3fc" },
    { token: "comment", foreground: "#6b7280" },
    { token: "number", foreground: "#fdba74" },
    { token: "number.hex", foreground: "#fdba74" },
    { token: "regexp", foreground: "#818cf8" },
    { token: "annotation", foreground: "#818cf8" },
    { token: "type", foreground: "#818cf8" },

    { token: "delimiter", foreground: "#9ca3af" },
    { token: "delimiter.html", foreground: "#9ca3af" },
    { token: 'delimiter.bracket', foreground: '#ffffff' },
    { token: 'delimiter.parenthesis', foreground: '#ffffff' }, 
    { token: 'bracket.highlighting', foreground: '#ffffff' }, 


    { token: "tag", foreground: "#7dd3fc" },
    { token: "metatag", foreground: "#e00000" },
    { token: "metatag.content.html", foreground: "#2dd4bf" },
    { token: "metatag.html", foreground: "#808080" },

    { token: "key", foreground: "#7dd3fc" },
    { token: "string.key.json", foreground: "#7dd3fc" },
    { token: "string.value.json", foreground: "#2dd4bf" },

    { token: "attribute.name", foreground: "#e879f9" },
    { token: "attribute.value", foreground: "#2dd4bf" },
    { token: "attribute.value.number", foreground: "#fdba74" },
    { token: "attribute.value.unit", foreground: "#fdba74" },
    { token: "attribute.value.html", foreground: "#2dd4bf" },

    { token: "string", foreground: "#2dd4bf" },
    { token: "string.html", foreground: "#2dd4bf" },

    { token: "keyword", foreground: "#7dd3fc" },
    { token: "keyword.json", foreground: "#7dd3fc" },
  ],
  colors: {
    "foreground": "#cccccc",
    "focusBorder": "#007fd4",
    "selection.background": "#256aa7",
    "scrollbar.shadow": "#000000",
    "activityBar.foreground": "#ffffff",
    "activityBar.background": "#333333",
    "activityBar.inactiveForeground": "#ffffff66",
    "activityBarBadge.foreground": "#ffffff",
    "activityBarBadge.background": "#007acc",
    "sideBar.background": "#252526",
    "sideBar.foreground": "#cccccc",
    "sideBarSectionHeader.background": "#00000000",
    "sideBarSectionHeader.foreground": "#cccccc",
    "sideBarSectionHeader.border": "#cccccc33",
    "sideBarTitle.foreground": "#bbbbbb",
    "list.inactiveSelectionBackground": "#37373d",
    "list.inactiveSelectionForeground": "#cccccc",
    "list.hoverBackground": "#2a2d2e",
    "list.hoverForeground": "#cccccc",
    "list.activeSelectionBackground": "#094771",
    "list.activeSelectionForeground": "#ffffff",
    "tree.indentGuidesStroke": "#585858",
    "list.dropBackground": "#383b3d",
    "list.highlightForeground": "#0097fb",
    "list.focusBackground": "#062f4a",
    "list.focusForeground": "#cccccc",
    "listFilterWidget.background": "#653723",
    "listFilterWidget.outline": "#00000000",
    "listFilterWidget.noMatchesOutline": "#be1100",
    "statusBar.foreground": "#ffffff",
    "statusBar.background": "#007acc",
    "statusBarItem.hoverBackground": "#ffffff1f",
    "statusBar.debuggingBackground": "#cc6633",
    "statusBar.debuggingForeground": "#ffffff",
    "statusBar.noFolderBackground": "#68217a",
    "statusBar.noFolderForeground": "#ffffff",
    "statusBarItem.remoteBackground": "#16825d",
    "statusBarItem.remoteForeground": "#ffffff",
    "titleBar.activeBackground": "#3c3c3c",
    "titleBar.activeForeground": "#cccccc",
    "titleBar.inactiveBackground": "#3c3c3c99",
    "titleBar.inactiveForeground": "#cccccc99",
    "titleBar.border": "#00000000",
    "menubar.selectionForeground": "#cccccc",
    "menubar.selectionBackground": "#ffffff1a",
    "menu.foreground": "#cccccc",
    "menu.background": "#252526",
    "menu.selectionForeground": "#ffffff",
    "menu.selectionBackground": "#094771",
    "menu.selectionBorder": "#00000000",
    "menu.separatorBackground": "#bbbbbb",
    "menu.border": "#00000085",
    "button.background": "#0e639c",
    "button.foreground": "#ffffff",
    "button.hoverBackground": "#1177bb",
    "button.secondaryForeground": "#ffffff",
    "button.secondaryBackground": "#3a3d41",
    "button.secondaryHoverBackground": "#45494e",
    "input.background": "#3c3c3c",
    "input.border": "#00000000",
    "input.foreground": "#cccccc",
    "inputOption.activeBackground": "#007fd466",
    "inputOption.activeBorder": "#007acc00",
    "inputOption.activeForeground": "#ffffff",
    "input.placeholderForeground": "#a6a6a6",
    "textLink.foreground": "#3794ff",
    "editor.background": "#262626",
    "editor.foreground": "#d4d4d4",
    "editorLineNumber.foreground": "#9ca3af",
    "editorCursor.foreground": "#d1d5db",
    "editorCursor.background": "#000000",
    "editor.selectionBackground": "#0c4a6e",
    "editor.inactiveSelectionBackground": "#374151",
    "editorWhitespace.foreground": "#e3e4e229",
    "editor.selectionHighlightBackground": "#add6ff26",
    "editor.selectionHighlightBorder": "#495F77",
    "editor.findMatchBackground": "#515c6a",
    "editor.findMatchBorder": "#74879f",
    "editor.findMatchHighlightBackground": "#ea5c0055",
    "editor.findMatchHighlightBorder": "#ffffff00",
    "editor.findRangeHighlightBackground": "#3a3d4166",
    "editor.findRangeHighlightBorder": "#ffffff00",
    "editor.rangeHighlightBackground": "#ffffff0b",
    "editor.rangeHighlightBorder": "#ffffff00",
    "editor.hoverHighlightBackground": "#264f7840",
    "editor.wordHighlightStrongBackground": "#004972b8",
    "editor.wordHighlightBackground": "#575757b8",
    "editor.lineHighlightBackground": "#ffffff0A",
    "editor.lineHighlightBorder": "#282828",
    "editorLineNumber.activeForeground": "#e5e7eb",
    "editorLink.activeForeground": "#4e94ce",
    "editorIndentGuide.background": "#404040",
    "editorIndentGuide.activeBackground": "#707070",
    "editorRuler.foreground": "#5a5a5a",
    "editorBracketMatch.background": "#0064001a",
    "editorBracketMatch.border": "#888888",
    "editor.foldBackground": "#264f784d",
    "editorOverviewRuler.background": "#25252500",
    "editorOverviewRuler.border": "#7f7f7f4d",
    "editorError.foreground": "#f48771",
    "editorError.background": "#B73A3400",
    "editorError.border": "#ffffff00",
    "editorWarning.foreground": "#cca700",
    "editorWarning.background": "#A9904000",
    "editorWarning.border": "#ffffff00",
    "editorInfo.foreground": "#75beff",
    "editorInfo.background": "#4490BF00",
    "editorInfo.border": "#4490BF00",
    "editorGutter.background": "#262626",
    "editorGutter.modifiedBackground": "#0c7d9d",
    "editorGutter.addedBackground": "#587c0c",
    "editorGutter.deletedBackground": "#94151b",
    "editorGutter.foldingControlForeground": "#c5c5c5",
    "editorCodeLens.foreground": "#999999",
    "editorGroup.border": "#444444",
    "diffEditor.insertedTextBackground": "#9bb95533",
    "diffEditor.removedTextBackground": "#ff000033",
    "diffEditor.border": "#444444",
    "panel.background": "#1e1e1e",
    "panel.border": "#80808059",
    "panelTitle.activeBorder": "#e7e7e7",
    "panelTitle.activeForeground": "#e7e7e7",
    "panelTitle.inactiveForeground": "#e7e7e799",
    "badge.background": "#4d4d4d",
    "badge.foreground": "#ffffff",
    "terminal.foreground": "#cccccc",
    "terminal.selectionBackground": "#ffffff40",
    "terminalCursor.background": "#0087FF",
    "terminalCursor.foreground": "#ffffff",
    "terminal.border": "#80808059",
    "terminal.ansiBlack": "#000000",
    "terminal.ansiBlue": "#2472c8",
    "terminal.ansiBrightBlack": "#666666",
    "terminal.ansiBrightBlue": "#3b8eea",
    "terminal.ansiBrightCyan": "#29b8db",
    "terminal.ansiBrightGreen": "#23d18b",
    "terminal.ansiBrightMagenta": "#d670d6",
    "terminal.ansiBrightRed": "#f14c4c",
    "terminal.ansiBrightWhite": "#e5e5e5",
    "terminal.ansiBrightYellow": "#f5f543",
    "terminal.ansiCyan": "#11a8cd",
    "terminal.ansiGreen": "#0dbc79",
    "terminal.ansiMagenta": "#bc3fbc",
    "terminal.ansiRed": "#cd3131",
    "terminal.ansiWhite": "#e5e5e5",
    "terminal.ansiYellow": "#e5e510",
    "breadcrumb.background": "#1e1e1e",
    "breadcrumb.foreground": "#cccccccc",
    "breadcrumb.focusForeground": "#e0e0e0",
    "editorGroupHeader.tabsBackground": "#252526",
    "tab.activeForeground": "#ffffff",
    "tab.border": "#252526",
    "tab.activeBackground": "#1e1e1e",
    "tab.activeBorder": "#00000000",
    "tab.activeBorderTop": "#00000000",
    "tab.inactiveBackground": "#2d2d2d",
    "tab.inactiveForeground": "#ffffff80",
    "scrollbarSlider.background": "#79797966",
    "scrollbarSlider.hoverBackground": "#646464b3",
    "scrollbarSlider.activeBackground": "#bfbfbf66",
    "progressBar.background": "#0e70c0",
    "widget.shadow": "#0000005c",
    "editorWidget.foreground": "#cccccc",
    "editorWidget.background": "#252526",
    "editorWidget.resizeBorder": "#5F5F5F",
    "pickerGroup.border": "#3f3f46",
    "pickerGroup.foreground": "#3794ff",
    "debugToolBar.background": "#333333",
    "debugToolBar.border": "#474747",
    "notifications.foreground": "#cccccc",
    "notifications.background": "#252526",
    "notificationToast.border": "#474747",
    "notificationsErrorIcon.foreground": "#f48771",
    "notificationsWarningIcon.foreground": "#cca700",
    "notificationsInfoIcon.foreground": "#75beff",
    "notificationCenter.border": "#474747",
    "notificationCenterHeader.foreground": "#cccccc",
    "notificationCenterHeader.background": "#303031",
    "notifications.border": "#303031",
    "gitDecoration.addedResourceForeground": "#81b88b",
    "gitDecoration.conflictingResourceForeground": "#6c6cc4",
    "gitDecoration.deletedResourceForeground": "#c74e39",
    "gitDecoration.ignoredResourceForeground": "#8c8c8c",
    "gitDecoration.modifiedResourceForeground": "#e2c08d",
    "gitDecoration.stageDeletedResourceForeground": "#c74e39",
    "gitDecoration.stageModifiedResourceForeground": "#e2c08d",
    "gitDecoration.submoduleResourceForeground": "#8db9e2",
    "gitDecoration.untrackedResourceForeground": "#73c991",
    "editorMarkerNavigation.background": "#2d2d30",
    "editorMarkerNavigationError.background": "#f48771",
    "editorMarkerNavigationWarning.background": "#cca700",
    "editorMarkerNavigationInfo.background": "#75beff",
    "merge.currentHeaderBackground": "#367366",
    "merge.currentContentBackground": "#27403B",
    "merge.incomingHeaderBackground": "#395F8F",
    "merge.incomingContentBackground": "#28384B",
    "merge.commonHeaderBackground": "#383838",
    "merge.commonContentBackground": "#282828",
    "editorSuggestWidget.background": "#252526",
    "editorSuggestWidget.border": "#454545",
    "editorSuggestWidget.foreground": "#d4d4d4",
    "editorSuggestWidget.highlightForeground": "#0097fb",
    "editorSuggestWidget.selectedBackground": "#062f4a",
    "editorHoverWidget.foreground": "#cccccc",
    "editorHoverWidget.background": "#252526",
    "editorHoverWidget.border": "#454545",
    "peekView.border": "#007acc",
    "peekViewEditor.background": "#001f33",
    "peekViewEditorGutter.background": "#001f33",
    "peekViewEditor.matchHighlightBackground": "#ff8f0099",
    "peekViewEditor.matchHighlightBorder": "#ee931e",
    "peekViewResult.background": "#252526",
    "peekViewResult.fileForeground": "#ffffff",
    "peekViewResult.lineForeground": "#bbbbbb",
    "peekViewResult.matchHighlightBackground": "#ea5c004d",
    "peekViewResult.selectionBackground": "#3399ff33",
    "peekViewResult.selectionForeground": "#ffffff",
    "peekViewTitle.background": "#1e1e1e",
    "peekViewTitleDescription.foreground": "#ccccccb3",
    "peekViewTitleLabel.foreground": "#ffffff",
    "icon.foreground": "#cccccc",
    "checkbox.background": "#3c3c3c",
    "checkbox.foreground": "#cccccc",
    "checkbox.border": "#00000000",
    "dropdown.background": "#3c3c3c",
    "dropdown.foreground": "#cccccc",
    "dropdown.border": "#00000000",
    "minimapGutter.addedBackground": "#587c0c",
    "minimapGutter.modifiedBackground": "#0c7d9d",
    "minimapGutter.deletedBackground": "#94151b",
    "minimap.findMatchHighlight": "#515c6a",
    "minimap.selectionHighlight": "#0c4a6e",
    "minimap.errorHighlight": "#f48771",
    "minimap.warningHighlight": "#cca700",
    "minimap.background": "#262626",
    "sideBar.dropBackground": "#383b3d",
    "editorGroup.emptyBackground": "#262626",
    "panelSection.border": "#80808059",
    "statusBarItem.activeBackground": "#FFFFFF25",
    "settings.headerForeground": "#cccccc",
    "settings.focusedRowBackground": "#ffffff07",
    "walkThrough.embeddedEditorBackground": "#00000050",
    "breadcrumb.activeSelectionForeground": "#e0e0e0",
    "editorGutter.commentRangeForeground": "#c5c5c5",
    "debugExceptionWidget.background": "#333333",
    "debugExceptionWidget.border": "#474747",
  },
};
