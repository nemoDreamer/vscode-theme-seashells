// const alpha = (hexColor, hexAlpha) => `${hexColor}${hexAlpha}`;

module.exports = ({ name, type /* , theme */ }) => ({
  name,
  $schema: "vscode://schemas/color-theme",
  type,
  colors: {
    "activityBar.activeFocusBorder": "#ffd866",
    "activityBar.background": "#19181a",
    "activityBar.border": "#19181a",
    "activityBar.foreground": "#c1c0c0",
    "activityBar.inactiveForeground": "#5b595c",

    "activityBarBadge.background": "#ffd866",
    "activityBarBadge.foreground": "#2d2a2e",

    "badge.background": "#ffd866",
    "badge.foreground": "#2d2a2e",

    "banner.background": "#403e41",
    "banner.foreground": "#c1c0c0",
    "banner.iconForeground": "#c1c0c0",

    "breadcrumb.activeSelectionForeground": "#fcfcfa",
    "breadcrumb.focusForeground": "#c1c0c0",
    "breadcrumb.foreground": "#939293",

    "button.background": "#403e41",
    "button.foreground": "#c1c0c0",
    "button.hoverBackground": "#5b595c",
    "button.secondaryBackground": "#403e41",
    "button.secondaryForeground": "#c1c0c0",
    "button.secondaryHoverBackground": "#5b595c",
    "button.separator": "#2d2a2e",

    "charts.blue": "#78dce8",
    "charts.foreground": "#fcfcfa",
    "charts.green": "#a9dc76",
    "charts.lines": "#727072",
    "charts.orange": "#fc9867",
    "charts.purple": "#ab9df2",
    "charts.red": "#ff6188",
    "charts.yellow": "#ffd866",

    "checkbox.background": "#403e41",
    "checkbox.border": "#403e41",
    "checkbox.foreground": "#fcfcfa",

    "commandCenter.activeBackground": "#2d2a2e",
    "commandCenter.activeForeground": "#c1c0c0",
    "commandCenter.background": "#221f22",
    "commandCenter.border": "#2d2a2e",
    "commandCenter.foreground": "#939293",

    "debugConsole.errorForeground": "#ff6188",
    "debugConsole.infoForeground": "#78dce8",
    "debugConsole.sourceForeground": "#fcfcfa",
    "debugConsole.warningForeground": "#fc9867",
    "debugConsoleInputIcon.foreground": "#ffd866",

    "debugExceptionWidget.background": "#403e41",
    "debugExceptionWidget.border": "#2d2a2e",

    "debugIcon.breakpointCurrentStackframeForeground": "#ffd866",
    "debugIcon.breakpointDisabledForeground": "#c1c0c0",
    "debugIcon.breakpointForeground": "#ff6188",
    "debugIcon.breakpointStackframeForeground": "#fcfcfa",
    "debugIcon.breakpointUnverifiedForeground": "#fc9867",
    "debugIcon.continueForeground": "#fcfcfa",
    "debugIcon.disconnectForeground": "#fcfcfa",
    "debugIcon.pauseForeground": "#fcfcfa",
    "debugIcon.restartForeground": "#a9dc76",
    "debugIcon.startForeground": "#a9dc76",
    "debugIcon.stepBackForeground": "#fcfcfa",
    "debugIcon.stepIntoForeground": "#fcfcfa",
    "debugIcon.stepOutForeground": "#fcfcfa",
    "debugIcon.stepOverForeground": "#fcfcfa",
    "debugIcon.stopForeground": "#ff6188",
    "debugTokenExpression.boolean": "#fc9867",
    "debugTokenExpression.error": "#ff6188",
    "debugTokenExpression.name": "#78dce8",
    "debugTokenExpression.number": "#ab9df2",
    "debugTokenExpression.string": "#ffd866",
    "debugTokenExpression.value": "#fcfcfa",
    "debugToolBar.background": "#403e41",
    "debugView.exceptionLabelBackground": "#ff6188",
    "debugView.exceptionLabelForeground": "#2d2a2e",
    "debugView.stateLabelBackground": "#a9dc76",
    "debugView.stateLabelForeground": "#2d2a2e",
    "debugView.valueChangedHighlight": "#ffd866",

    descriptionForeground: "#939293",

    "diffEditor.diagonalFill": "#403e41",
    "diffEditor.insertedLineBackground": "#a9dc7619",
    "diffEditor.insertedTextBackground": "#a9dc7619",
    "diffEditor.removedLineBackground": "#ff618819",
    "diffEditor.removedTextBackground": "#ff618819",
    "diffEditorGutter.insertedLineBackground": "#a9dc7619",
    "diffEditorGutter.removedLineBackground": "#ff618819",
    "diffEditorOverview.insertedForeground": "#a9dc76a5",
    "diffEditorOverview.removedForeground": "#ff6188a5",

    "dropdown.background": "#2d2a2e",
    "dropdown.border": "#2d2a2e",
    "dropdown.foreground": "#939293",
    "dropdown.listBackground": "#403e41",

    "editor.background": "#2d2a2e",
    "editor.findMatchBackground": "#fcfcfa26",
    "editor.findMatchBorder": "#ffd866",
    "editor.findMatchHighlightBackground": "#fcfcfa26",
    "editor.findMatchHighlightBorder": "#00000000",
    "editor.findRangeHighlightBackground": "#fcfcfa0c",
    "editor.findRangeHighlightBorder": "#00000000",
    "editor.focusedStackFrameHighlightBackground": "#c1c0c026",
    "editor.foldBackground": "#fcfcfa0c",
    "editor.foreground": "#fcfcfa",
    "editor.hoverHighlightBackground": "#fcfcfa0c",
    "editor.inactiveSelectionBackground": "#fcfcfa0c",
    "editor.inlineValuesBackground": "#5b595c",
    "editor.inlineValuesForeground": "#c1c0c0",
    "editor.lineHighlightBackground": "#fcfcfa0c",
    "editor.lineHighlightBorder": "#00000000",
    "editor.linkedEditingBackground": "#403e41",
    "editor.rangeHighlightBackground": "#403e41",
    "editor.rangeHighlightBorder": "#403e41",
    "editor.selectionBackground": "#c1c0c026",
    "editor.selectionHighlightBackground": "#fcfcfa26",
    "editor.selectionHighlightBorder": "#00000000",
    "editor.stackFrameHighlightBackground": "#c1c0c026",
    "editor.wordHighlightBackground": "#fcfcfa26",
    "editor.wordHighlightBorder": "#00000000",
    "editor.wordHighlightStrongBackground": "#fcfcfa26",
    "editor.wordHighlightStrongBorder": "#00000000",

    "editorBracketHighlight.foreground1": "#ff6188",
    "editorBracketHighlight.foreground2": "#fc9867",
    "editorBracketHighlight.foreground3": "#ffd866",
    "editorBracketHighlight.foreground4": "#a9dc76",
    "editorBracketHighlight.foreground5": "#78dce8",
    "editorBracketHighlight.foreground6": "#ab9df2",

    "editorBracketMatch.background": "#2d2a2e",
    "editorBracketMatch.border": "#727072",

    "editorCodeLens.foreground": "#727072",

    "editorCursor.background": "#2d2a2e",
    "editorCursor.foreground": "#fcfcfa",

    "editorError.background": "#00000000",
    "editorError.border": "#00000000",
    "editorError.foreground": "#ff6188",

    "editorGroup.border": "#221f22",
    "editorGroup.dropBackground": "#221f22bf",
    "editorGroup.emptyBackground": "#19181a",
    "editorGroup.focusedEmptyBorder": "#221f22",

    "editorGroupHeader.noTabsBackground": "#2d2a2e",
    "editorGroupHeader.tabsBackground": "#2d2a2e",
    "editorGroupHeader.tabsBorder": "#2d2a2e",

    "editorGutter.addedBackground": "#a9dc76",
    "editorGutter.background": "#2d2a2e",
    "editorGutter.deletedBackground": "#ff6188",
    "editorGutter.foldingControlForeground": "#c1c0c0",
    "editorGutter.modifiedBackground": "#fc9867",

    "editorHint.border": "#2d2a2e",
    "editorHint.foreground": "#ab9df2",

    "editorHoverWidget.background": "#403e41",
    "editorHoverWidget.border": "#2d2a2e",

    "editorIndentGuide.background": "#403e41",

    "editorInfo.background": "#00000000",
    "editorInfo.border": "#2d2a2e",
    "editorInfo.foreground": "#78dce8",

    "editorLightBulb.foreground": "#ffd866",
    "editorLightBulbAutoFix.foreground": "#a9dc76",

    "editorLineNumber.activeForeground": "#c1c0c0",
    "editorLineNumber.foreground": "#5b595c",

    "editorLink.activeForeground": "#78dce8",

    "editorMarkerNavigation.background": "#403e41",
    "editorMarkerNavigationError.background": "#ff6188",
    "editorMarkerNavigationInfo.background": "#78dce8",
    "editorMarkerNavigationWarning.background": "#fc9867",

    "editorOverviewRuler.addedForeground": "#a9dc76",
    "editorOverviewRuler.border": "#2d2a2e",
    "editorOverviewRuler.currentContentForeground": "#403e41",
    "editorOverviewRuler.deletedForeground": "#ff6188",
    "editorOverviewRuler.errorForeground": "#ff6188",
    "editorOverviewRuler.findMatchForeground": "#fcfcfa26",
    "editorOverviewRuler.incomingContentForeground": "#403e41",
    "editorOverviewRuler.infoForeground": "#78dce8",
    "editorOverviewRuler.modifiedForeground": "#fc9867",
    "editorOverviewRuler.rangeHighlightForeground": "#fcfcfa26",
    "editorOverviewRuler.selectionHighlightForeground": "#fcfcfa26",
    "editorOverviewRuler.warningForeground": "#fc9867",
    "editorOverviewRuler.wordHighlightForeground": "#fcfcfa26",
    "editorOverviewRuler.wordHighlightStrongForeground": "#fcfcfa26",

    "editorPane.background": "#2d2a2e",

    "editorRuler.foreground": "#5b595c",

    "editorSuggestWidget.background": "#403e41",
    "editorSuggestWidget.border": "#403e41",
    "editorSuggestWidget.foreground": "#c1c0c0",
    "editorSuggestWidget.highlightForeground": "#fcfcfa",
    "editorSuggestWidget.selectedBackground": "#727072",

    "editorUnnecessaryCode.opacity": "#000000a5",

    "editorWarning.background": "#00000000",
    "editorWarning.border": "#00000000",
    "editorWarning.foreground": "#fc9867",

    "editorWhitespace.foreground": "#5b595c",

    "editorWidget.background": "#403e41",
    "editorWidget.border": "#403e41",

    errorForeground: "#ff6188",

    "extensionBadge.remoteForeground": "#a9dc76",

    "extensionButton.prominentBackground": "#403e41",
    "extensionButton.prominentForeground": "#fcfcfa",
    "extensionButton.prominentHoverBackground": "#5b595c",

    "extensionIcon.preReleaseForeground": "#ab9df2",
    "extensionIcon.sponsorForeground": "#78dce8",
    "extensionIcon.starForeground": "#ffd866",
    "extensionIcon.verifiedForeground": "#a9dc76",

    focusBorder: "#727072",

    foreground: "#fcfcfa",

    "gitDecoration.addedResourceForeground": "#a9dc76",
    "gitDecoration.conflictingResourceForeground": "#fc9867",
    "gitDecoration.deletedResourceForeground": "#ff6188",
    "gitDecoration.ignoredResourceForeground": "#5b595c",
    "gitDecoration.modifiedResourceForeground": "#ffd866",
    "gitDecoration.stageDeletedResourceForeground": "#ff6188",
    "gitDecoration.stageModifiedResourceForeground": "#ffd866",
    "gitDecoration.untrackedResourceForeground": "#c1c0c0",

    "icon.foreground": "#939293",

    "input.background": "#403e41",
    "input.border": "#403e41",
    "input.foreground": "#fcfcfa",
    "input.placeholderForeground": "#727072",

    "inputOption.activeBackground": "#5b595c",
    "inputOption.activeBorder": "#5b595c",
    "inputOption.activeForeground": "#fcfcfa",
    "inputOption.hoverBackground": "#5b595c",

    "inputValidation.errorBackground": "#403e41",
    "inputValidation.errorBorder": "#ff6188",
    "inputValidation.errorForeground": "#ff6188",
    "inputValidation.infoBackground": "#403e41",
    "inputValidation.infoBorder": "#78dce8",
    "inputValidation.infoForeground": "#78dce8",
    "inputValidation.warningBackground": "#403e41",
    "inputValidation.warningBorder": "#fc9867",
    "inputValidation.warningForeground": "#fc9867",

    "keybindingLabel.background": "#5b595c",
    "keybindingLabel.border": "#5b595c",
    "keybindingLabel.bottomBorder": "#403e41",
    "keybindingLabel.foreground": "#c1c0c0",

    "list.activeSelectionBackground": "#fcfcfa0c",
    "list.activeSelectionForeground": "#ffd866",
    "list.dropBackground": "#221f22bf",
    "list.errorForeground": "#ff6188",
    "list.focusBackground": "#2d2a2e",
    "list.focusForeground": "#fcfcfa",
    "list.highlightForeground": "#fcfcfa",
    "list.hoverBackground": "#fcfcfa0c",
    "list.hoverForeground": "#fcfcfa",
    "list.inactiveFocusBackground": "#2d2a2e",
    "list.inactiveSelectionBackground": "#c1c0c00c",
    "list.inactiveSelectionForeground": "#ffd866",
    "list.invalidItemForeground": "#ff6188",
    "list.warningForeground": "#fc9867",
    "listFilterWidget.background": "#2d2a2e",
    "listFilterWidget.noMatchesOutline": "#ff6188",
    "listFilterWidget.outline": "#2d2a2e",

    "menu.background": "#2d2a2e",
    "menu.border": "#221f22",
    "menu.foreground": "#fcfcfa",
    "menu.selectionForeground": "#ffd866",
    "menu.separatorBackground": "#403e41",

    "menubar.selectionForeground": "#fcfcfa",

    "merge.border": "#2d2a2e",
    "merge.commonContentBackground": "#fcfcfa19",
    "merge.commonHeaderBackground": "#fcfcfa26",
    "merge.currentContentBackground": "#ff618819",
    "merge.currentHeaderBackground": "#ff618826",
    "merge.incomingContentBackground": "#a9dc7619",
    "merge.incomingHeaderBackground": "#a9dc7626",

    "mergeEditor.change.background": "#fcfcfa19",
    "mergeEditor.change.word.background": "#fcfcfa19",
    "mergeEditor.conflict.handled.minimapOverViewRuler": "#a9dc76",
    "mergeEditor.conflict.handledFocused.border": "#a9dc76",
    "mergeEditor.conflict.handledUnfocused.border": "#a9dc76",
    "mergeEditor.conflict.unhandled.minimapOverViewRuler": "#ff6188",
    "mergeEditor.conflict.unhandledFocused.border": "#ff6188",
    "mergeEditor.conflict.unhandledUnfocused.border": "#ff6188",

    "minimap.errorHighlight": "#ff6188a5",
    "minimap.findMatchHighlight": "#939293a5",
    "minimap.selectionHighlight": "#c1c0c026",
    "minimap.selectionOccurrenceHighlight": "#727072a5",
    "minimap.warningHighlight": "#fc9867a5",
    "minimapGutter.addedBackground": "#a9dc76",
    "minimapGutter.deletedBackground": "#ff6188",
    "minimapGutter.modifiedBackground": "#ffd866",
    "notebook.cellBorderColor": "#403e41",
    "notebook.cellEditorBackground": "#221f227f",
    "notebook.cellInsertionIndicator": "#fcfcfa",
    "notebook.cellStatusBarItemHoverBackground": "#727072",
    "notebook.cellToolbarSeparator": "#403e41",
    "notebook.editorBackground": "#2d2a2e",
    "notebook.focusedEditorBorder": "#727072",
    "notebookStatusErrorIcon.foreground": "#ff6188",
    "notebookStatusRunningIcon.foreground": "#fcfcfa",
    "notebookStatusSuccessIcon.foreground": "#a9dc76",
    "notificationCenter.border": "#403e41",
    "notificationCenterHeader.background": "#403e41",
    "notificationCenterHeader.foreground": "#939293",
    "notificationLink.foreground": "#ffd866",
    "notificationToast.border": "#403e41",
    "notifications.background": "#403e41",
    "notifications.border": "#403e41",
    "notifications.foreground": "#c1c0c0",
    "notificationsErrorIcon.foreground": "#ff6188",
    "notificationsInfoIcon.foreground": "#78dce8",
    "notificationsWarningIcon.foreground": "#fc9867",
    "panel.background": "#403e41",
    "panel.border": "#2d2a2e",
    "panelTitle.activeBorder": "#ffd866",
    "panelTitle.activeForeground": "#ffd866",
    "panelTitle.inactiveForeground": "#939293",
    "peekView.border": "#2d2a2e",
    "peekViewEditor.background": "#403e41",
    "peekViewEditor.matchHighlightBackground": "#5b595c",
    "peekViewEditorGutter.background": "#403e41",
    "peekViewResult.background": "#403e41",
    "peekViewResult.fileForeground": "#939293",
    "peekViewResult.lineForeground": "#939293",
    "peekViewResult.matchHighlightBackground": "#5b595c",
    "peekViewResult.selectionBackground": "#403e41",
    "peekViewResult.selectionForeground": "#fcfcfa",
    "peekViewTitle.background": "#403e41",
    "peekViewTitleDescription.foreground": "#939293",
    "peekViewTitleLabel.foreground": "#fcfcfa",
    "pickerGroup.border": "#2d2a2e",
    "pickerGroup.foreground": "#5b595c",
    "ports.iconRunningProcessForeground": "#a9dc76",
    "problemsErrorIcon.foreground": "#ff6188",
    "problemsInfoIcon.foreground": "#78dce8",
    "problemsWarningIcon.foreground": "#fc9867",
    "profileBadge.background": "#403e41",
    "profileBadge.foreground": "#c1c0c0",
    "progressBar.background": "#403e41",
    "sash.hoverBorder": "#727072",
    "scrollbar.shadow": "#2d2a2e",
    "scrollbarSlider.activeBackground": "#fcfcfa59",
    "scrollbarSlider.background": "#c1c0c026",
    "scrollbarSlider.hoverBackground": "#fcfcfa26",
    "selection.background": "#c1c0c026",
    "settings.checkboxBackground": "#403e41",
    "settings.checkboxBorder": "#403e41",
    "settings.checkboxForeground": "#fcfcfa",
    "settings.dropdownBackground": "#403e41",
    "settings.dropdownBorder": "#403e41",
    "settings.dropdownForeground": "#fcfcfa",
    "settings.dropdownListBorder": "#939293",
    "settings.headerForeground": "#ffd866",
    "settings.modifiedItemIndicator": "#ffd866",
    "settings.numberInputBackground": "#403e41",
    "settings.numberInputBorder": "#403e41",
    "settings.numberInputForeground": "#fcfcfa",
    "settings.rowHoverBackground": "#7270720c",
    "settings.textInputBackground": "#403e41",
    "settings.textInputBorder": "#403e41",
    "settings.textInputForeground": "#fcfcfa",
    "sideBar.background": "#221f22",
    "sideBar.border": "#19181a",
    "sideBar.dropBackground": "#221f22bf",
    "sideBar.foreground": "#939293",
    "sideBarSectionHeader.background": "#221f22",
    "sideBarSectionHeader.foreground": "#727072",
    "sideBarTitle.foreground": "#5b595c",
    "statusBar.background": "#221f22",
    "statusBar.border": "#19181a",
    "statusBar.debuggingBackground": "#727072",
    "statusBar.debuggingBorder": "#221f22",
    "statusBar.debuggingForeground": "#fcfcfa",
    "statusBar.focusBorder": "#403e41",
    "statusBar.foreground": "#727072",
    "statusBar.noFolderBackground": "#221f22",
    "statusBar.noFolderBorder": "#19181a",
    "statusBar.noFolderForeground": "#727072",
    "statusBarItem.activeBackground": "#2d2a2e",
    "statusBarItem.errorBackground": "#2d2a2e",
    "statusBarItem.errorForeground": "#ff6188",
    "statusBarItem.focusBorder": "#727072",
    "statusBarItem.hoverBackground": "#fcfcfa0c",
    "statusBarItem.prominentBackground": "#403e41",
    "statusBarItem.prominentHoverBackground": "#403e41",
    "statusBarItem.remoteBackground": "#221f22",
    "statusBarItem.remoteForeground": "#a9dc76",
    "statusBarItem.warningBackground": "#2d2a2e",
    "statusBarItem.warningForeground": "#fc9867",
    "symbolIcon.arrayForeground": "#ff6188",
    "symbolIcon.booleanForeground": "#ff6188",
    "symbolIcon.classForeground": "#78dce8",
    "symbolIcon.colorForeground": "#ab9df2",
    "symbolIcon.constantForeground": "#ab9df2",
    "symbolIcon.constructorForeground": "#a9dc76",
    "symbolIcon.enumeratorForeground": "#fc9867",
    "symbolIcon.enumeratorMemberForeground": "#fc9867",
    "symbolIcon.eventForeground": "#fc9867",
    "symbolIcon.fieldForeground": "#fc9867",
    "symbolIcon.fileForeground": "#c1c0c0",
    "symbolIcon.folderForeground": "#c1c0c0",
    "symbolIcon.functionForeground": "#a9dc76",
    "symbolIcon.interfaceForeground": "#78dce8",
    "symbolIcon.keyForeground": "#fc9867",
    "symbolIcon.keywordForeground": "#ff6188",
    "symbolIcon.methodForeground": "#a9dc76",
    "symbolIcon.moduleForeground": "#78dce8",
    "symbolIcon.namespaceForeground": "#78dce8",
    "symbolIcon.nullForeground": "#ab9df2",
    "symbolIcon.numberForeground": "#ab9df2",
    "symbolIcon.objectForeground": "#78dce8",
    "symbolIcon.operatorForeground": "#ff6188",
    "symbolIcon.packageForeground": "#ab9df2",
    "symbolIcon.propertyForeground": "#fc9867",
    "symbolIcon.referenceForeground": "#ab9df2",
    "symbolIcon.snippetForeground": "#a9dc76",
    "symbolIcon.stringForeground": "#ffd866",
    "symbolIcon.structForeground": "#ff6188",
    "symbolIcon.textForeground": "#ffd866",
    "symbolIcon.typeParameterForeground": "#fc9867",
    "symbolIcon.unitForeground": "#ab9df2",
    "symbolIcon.variableForeground": "#78dce8",
    "tab.activeBackground": "#2d2a2e",
    "tab.activeBorder": "#ffd866",
    "tab.activeForeground": "#ffd866",
    "tab.activeModifiedBorder": "#5b595c",
    "tab.border": "#2d2a2e",
    "tab.hoverBackground": "#2d2a2e",
    "tab.hoverBorder": "#5b595c",
    "tab.hoverForeground": "#fcfcfa",
    "tab.inactiveBackground": "#2d2a2e",
    "tab.inactiveForeground": "#939293",
    "tab.inactiveModifiedBorder": "#5b595c",
    "tab.lastPinnedBorder": "#5b595c",
    "tab.unfocusedActiveBorder": "#939293",
    "tab.unfocusedActiveForeground": "#c1c0c0",
    "tab.unfocusedActiveModifiedBorder": "#403e41",
    "tab.unfocusedHoverBackground": "#2d2a2e",
    "tab.unfocusedHoverBorder": "#2d2a2e",
    "tab.unfocusedHoverForeground": "#c1c0c0",
    "tab.unfocusedInactiveForeground": "#939293",
    "tab.unfocusedInactiveModifiedBorder": "#403e41",
    "terminal.ansiBlack": "#403e41",
    "terminal.ansiBlue": "#fc9867",
    "terminal.ansiBrightBlack": "#727072",
    "terminal.ansiBrightBlue": "#fc9867",
    "terminal.ansiBrightCyan": "#78dce8",
    "terminal.ansiBrightGreen": "#a9dc76",
    "terminal.ansiBrightMagenta": "#ab9df2",
    "terminal.ansiBrightRed": "#ff6188",
    "terminal.ansiBrightWhite": "#fcfcfa",
    "terminal.ansiBrightYellow": "#ffd866",
    "terminal.ansiCyan": "#78dce8",
    "terminal.ansiGreen": "#a9dc76",
    "terminal.ansiMagenta": "#ab9df2",
    "terminal.ansiRed": "#ff6188",
    "terminal.ansiWhite": "#fcfcfa",
    "terminal.ansiYellow": "#ffd866",
    "terminal.background": "#403e41",
    "terminal.foreground": "#fcfcfa",
    "terminal.selectionBackground": "#fcfcfa26",
    "terminalCommandDecoration.defaultBackground": "#fcfcfa",
    "terminalCommandDecoration.errorBackground": "#ff6188",
    "terminalCommandDecoration.successBackground": "#a9dc76",
    "terminalCursor.background": "#00000000",
    "terminalCursor.foreground": "#fcfcfa",
    "testing.iconErrored": "#ff6188",
    "testing.iconFailed": "#ff6188",
    "testing.iconPassed": "#a9dc76",
    "testing.iconQueued": "#fcfcfa",
    "testing.iconSkipped": "#fc9867",
    "testing.iconUnset": "#939293",
    "testing.message.error.decorationForeground": "#ff6188",
    "testing.message.error.lineBackground": "#ff618819",
    "testing.message.info.decorationForeground": "#fcfcfa",
    "testing.message.info.lineBackground": "#fcfcfa19",
    "testing.runAction": "#ffd866",
    "textBlockQuote.background": "#403e41",
    "textBlockQuote.border": "#403e41",
    "textCodeBlock.background": "#403e41",
    "textLink.activeForeground": "#fcfcfa",
    "textLink.foreground": "#ffd866",
    "textPreformat.foreground": "#fcfcfa",
    "textSeparator.foreground": "#727072",
    "titleBar.activeBackground": "#221f22",
    "titleBar.activeForeground": "#939293",
    "titleBar.border": "#19181a",
    "titleBar.inactiveBackground": "#221f22",
    "titleBar.inactiveForeground": "#5b595c",
    "walkThrough.embeddedEditorBackground": "#221f22",
    "welcomePage.progress.background": "#727072",
    "welcomePage.progress.foreground": "#939293",
    "welcomePage.tileBackground": "#403e41",
    "welcomePage.tileHoverBackground": "#5b595c",
    // "widget.shadow": "#19181a""activityBar.activeBorder": "#c1c0c0",
    // "activityBar.dropBorder": "#c1c0c0",
    // "breadcrumb.background": "#2d2a2e",
    // "breadcrumbPicker.background": "#403e41",
    // "chat.requestBackground": "#ffffff08",
    // "chat.requestBorder": "#ffffff1a",
    // "checkbox.selectBackground": "#403e41",
    // "checkbox.selectBorder": "#939293",
    // "commandCenter.activeBorder": "#9392934d",
    // "commandCenter.inactiveBorder": "#5b595c40",
    // "commandCenter.inactiveForeground": "#5b595c",
    // "commentsView.resolvedIcon": "#cccccc80",
    // "commentsView.unresolvedIcon": "#727072",
    // "diffEditor.move.border": "#8b8b8b9c",
    // "diffEditor.unchangedCodeBackground": "#74747429",
    // "diffEditor.unchangedRegionBackground": "#3e3e3e",
    // "diffEditor.unchangedRegionForeground": "#a3a2a2",
    // "disabledForeground": "#cccccc80",
    // "editor.snippetFinalTabstopHighlightBorder": "#525252",
    // "editor.snippetTabstopHighlightBackground": "#7c7c7c4d",
    // "editor.symbolHighlightBackground": "#fcfcfa26",
    // "editor.wordHighlightTextBackground": "#fcfcfa26",
    // "editor.wordHighlightTextBorder": "#00000000",
    // "editorActiveLineNumber.foreground": "#c6c6c6",
    // "editorBracketHighlight.unexpectedBracket.foreground": "#ff1212cc",
    // "editorBracketPairGuide.activeBackground1": "#00000000",
    // "editorBracketPairGuide.activeBackground2": "#00000000",
    // "editorBracketPairGuide.activeBackground3": "#00000000",
    // "editorBracketPairGuide.activeBackground4": "#00000000",
    // "editorBracketPairGuide.activeBackground5": "#00000000",
    // "editorBracketPairGuide.activeBackground6": "#00000000",
    // "editorBracketPairGuide.background1": "#00000000",
    // "editorBracketPairGuide.background2": "#00000000",
    // "editorBracketPairGuide.background3": "#00000000",
    // "editorBracketPairGuide.background4": "#00000000",
    // "editorBracketPairGuide.background5": "#00000000",
    // "editorBracketPairGuide.background6": "#00000000",
    // "editorCommentsWidget.rangeActiveBackground": "#7270721a",
    // "editorCommentsWidget.rangeActiveBorder": "#72707266",
    // "editorCommentsWidget.rangeBackground": "#7270721a",
    // "editorCommentsWidget.rangeBorder": "#72707266",
    // "editorCommentsWidget.resolvedBorder": "#cccccc80",
    // "editorCommentsWidget.unresolvedBorder": "#727072",
    // "editorGhostText.foreground": "#ffffff56",
    // "editorGroup.dropIntoPromptBackground": "#403e41",
    // "editorGroup.dropIntoPromptForeground": "#fcfcfa",
    // "editorGutter.commentGlyphForeground": "#fcfcfa",
    // "editorGutter.commentRangeForeground": "#333134",
    // "editorGutter.commentUnresolvedGlyphForeground": "#fcfcfa",
    // "editorHoverWidget.foreground": "#fcfcfa",
    // "editorHoverWidget.highlightForeground": "#fcfcfa",
    // "editorHoverWidget.statusBarBackground": "#4d4a4e",
    // "editorIndentGuide.activeBackground": "#5b595c",
    // "editorIndentGuide.activeBackground1": "#5b595c",
    // "editorIndentGuide.activeBackground2": "#00000000",
    // "editorIndentGuide.activeBackground3": "#00000000",
    // "editorIndentGuide.activeBackground4": "#00000000",
    // "editorIndentGuide.activeBackground5": "#00000000",
    // "editorIndentGuide.activeBackground6": "#00000000",
    // "editorIndentGuide.background1": "#403e41",
    // "editorIndentGuide.background2": "#00000000",
    // "editorIndentGuide.background3": "#00000000",
    // "editorIndentGuide.background4": "#00000000",
    // "editorIndentGuide.background5": "#00000000",
    // "editorIndentGuide.background6": "#00000000",
    // "editorInlayHint.background": "#ffd86640",
    // "editorInlayHint.foreground": "#fcfcfa",
    // "editorInlayHint.parameterBackground": "#ffd86640",
    // "editorInlayHint.parameterForeground": "#fcfcfa",
    // "editorInlayHint.typeBackground": "#ffd86640",
    // "editorInlayHint.typeForeground": "#fcfcfa",
    // "editorMarkerNavigationError.headerBackground": "#ff61881a",
    // "editorMarkerNavigationInfo.headerBackground": "#78dce81a",
    // "editorMarkerNavigationWarning.headerBackground": "#fc98671a",
    // "editorOverviewRuler.bracketMatchForeground": "#a0a0a0",
    // "editorOverviewRuler.commentForeground": "#333134",
    // "editorOverviewRuler.commentUnresolvedForeground": "#333134",
    // "editorOverviewRuler.commonContentForeground": "#fcfcfa26",
    // "editorOverviewRuler.wordHighlightTextForeground": "#fcfcfa26",
    // "editorStickyScroll.background": "#2d2a2e",
    // "editorStickyScrollHover.background": "#2a2d2e",
    // "editorSuggestWidget.focusHighlightForeground": "#fcfcfa",
    // "editorSuggestWidget.selectedForeground": "#ffd866",
    // "editorSuggestWidgetStatus.foreground": "#c1c0c080",
    // "editorUnicodeHighlight.background": "#bd9b0326",
    // "editorUnicodeHighlight.border": "#bd9b03",
    // "editorWidget.foreground": "#fcfcfa",
    // "extensionBadge.remoteBackground": "#ffd866",
    // "extensionButton.background": "#403e41",
    // "extensionButton.foreground": "#c1c0c0",
    // "extensionButton.hoverBackground": "#5b595c",
    // "extensionButton.separator": "#2d2a2e",
    // "gitDecoration.renamedResourceForeground": "#73c991",
    // "gitDecoration.submoduleResourceForeground": "#8db9e2",
    // "gitlens.closedAutolinkedIssueIconColor": "#a371f7",
    // "gitlens.closedPullRequestIconColor": "#f85149",
    // "gitlens.decorations.addedForegroundColor": "#a9dc76",
    // "gitlens.decorations.branchAheadForegroundColor": "#35b15e",
    // "gitlens.decorations.branchBehindForegroundColor": "#b15e35",
    // "gitlens.decorations.branchDivergedForegroundColor": "#d8af1b",
    // "gitlens.decorations.branchMissingUpstreamForegroundColor": "#c74e39",
    // "gitlens.decorations.branchUnpublishedForegroundColor": "#35b15e",
    // "gitlens.decorations.branchUpToDateForegroundColor": "#939293",
    // "gitlens.decorations.copiedForegroundColor": "#73c991",
    // "gitlens.decorations.deletedForegroundColor": "#ff6188",
    // "gitlens.decorations.ignoredForegroundColor": "#5b595c",
    // "gitlens.decorations.modifiedForegroundColor": "#ffd866",
    // "gitlens.decorations.renamedForegroundColor": "#73c991",
    // "gitlens.decorations.untrackedForegroundColor": "#c1c0c0",
    // "gitlens.decorations.workspaceCurrentForegroundColor": "#35b15e",
    // "gitlens.decorations.workspaceRepoMissingForegroundColor": "#909090",
    // "gitlens.decorations.workspaceRepoOpenForegroundColor": "#35b15e",
    // "gitlens.decorations.worktreeHasUncommittedChangesForegroundColor": "#e2c08d",
    // "gitlens.decorations.worktreeMissingForegroundColor": "#c74e39",
    // "gitlens.graphChangesColumnAddedColor": "#347d39",
    // "gitlens.graphChangesColumnDeletedColor": "#c93c37",
    // "gitlens.graphLane10Color": "#2ece9d",
    // "gitlens.graphLane1Color": "#15a0bf",
    // "gitlens.graphLane2Color": "#0669f7",
    // "gitlens.graphLane3Color": "#8e00c2",
    // "gitlens.graphLane4Color": "#c517b6",
    // "gitlens.graphLane5Color": "#d90171",
    // "gitlens.graphLane6Color": "#cd0101",
    // "gitlens.graphLane7Color": "#f25d2e",
    // "gitlens.graphLane8Color": "#f2ca33",
    // "gitlens.graphLane9Color": "#7bd938",
    // "gitlens.graphMinimapMarkerHeadColor": "#05e617",
    // "gitlens.graphMinimapMarkerHighlightsColor": "#fbff0a",
    // "gitlens.graphMinimapMarkerLocalBranchesColor": "#3087cf",
    // "gitlens.graphMinimapMarkerRemoteBranchesColor": "#2b5e88",
    // "gitlens.graphMinimapMarkerStashesColor": "#b34db3",
    // "gitlens.graphMinimapMarkerTagsColor": "#6b562e",
    // "gitlens.graphMinimapMarkerUpstreamColor": "#09ae17",
    // "gitlens.graphScrollMarkerHeadColor": "#05e617",
    // "gitlens.graphScrollMarkerHighlightsColor": "#fbff0a",
    // "gitlens.graphScrollMarkerLocalBranchesColor": "#3087cf",
    // "gitlens.graphScrollMarkerRemoteBranchesColor": "#2b5e88",
    // "gitlens.graphScrollMarkerStashesColor": "#b34db3",
    // "gitlens.graphScrollMarkerTagsColor": "#6b562e",
    // "gitlens.graphScrollMarkerUpstreamColor": "#09ae17",
    // "gitlens.gutterBackgroundColor": "#ffffff13",
    // "gitlens.gutterForegroundColor": "#bebebe",
    // "gitlens.gutterUncommittedForegroundColor": "#00bcf299",
    // "gitlens.lineHighlightBackgroundColor": "#00bcf233",
    // "gitlens.lineHighlightOverviewRulerColor": "#00bcf299",
    // "gitlens.mergedPullRequestIconColor": "#a371f7",
    // "gitlens.openAutolinkedIssueIconColor": "#3fb950",
    // "gitlens.openPullRequestIconColor": "#3fb950",
    // "gitlens.trailingLineBackgroundColor": "#00000000",
    // "gitlens.trailingLineForegroundColor": "#99999959",
    // "gitlens.unpublishedChangesIconColor": "#35b15e",
    // "gitlens.unpublishedCommitIconColor": "#35b15e",
    // "gitlens.unpulledChangesIconColor": "#b15e35",
    // "inlineChat.background": "#403e41",
    // "inlineChat.border": "#403e41",
    // "inlineChat.regionHighlight": "#fcfcfa0c",
    // "inlineChat.shadow": "#19181a",
    // "inlineChatDiff.inserted": "#a9dc760c",
    // "inlineChatDiff.removed": "#ff61880c",
    // "inlineChatInput.background": "#403e41",
    // "inlineChatInput.border": "#403e41",
    // "inlineChatInput.focusBorder": "#727072",
    // "inlineChatInput.placeholderForeground": "#727072",
    // "interactive.activeCodeBorder": "#2d2a2e",
    // "interactive.inactiveCodeBorder": "#c1c0c00c",
    // "issues.closed": "#cb2431",
    // "issues.newIssueDecoration": "#ffffff48",
    // "issues.open": "#3fb950",
    // "keybindingTable.headerBackground": "#fcfcfa0a",
    // "keybindingTable.rowsBackground": "#fcfcfa0a",
    // "list.deemphasizedForeground": "#8c8c8c",
    // "list.filterMatchBackground": "#fcfcfa26",
    // "list.filterMatchBorder": "#00000000",
    // "list.focusHighlightForeground": "#fcfcfa",
    // "list.focusOutline": "#727072",
    // "listFilterWidget.shadow": "#19181a",
    // "markdown.extension.editor.codeSpan.background": "#00000000",
    // "markdown.extension.editor.codeSpan.border": "#c1c0c026",
    // "markdown.extension.editor.formattingMark.foreground": "#5b595c",
    // "markdown.extension.editor.trailingSpace.background": "#403e41",
    // "menu.selectionBackground": "#fcfcfa0c",
    // "menubar.selectionBackground": "#5a5d5e50",
    // "mergeEditor.changeBase.background": "#4b1818",
    // "mergeEditor.changeBase.word.background": "#6f1313",
    // "mergeEditor.conflict.input1.background": "#ff61880f",
    // "mergeEditor.conflict.input2.background": "#a9dc760f",
    // "mergeEditor.conflictingLines.background": "#ffea0047",
    // "minimap.foregroundOpacity": "#000000",
    // "minimapSlider.activeBackground": "#fcfcfa2d",
    // "minimapSlider.background": "#c1c0c013",
    // "minimapSlider.hoverBackground": "#fcfcfa13",
    // "notebook.focusedCellBorder": "#727072",
    // "notebook.inactiveFocusedCellBorder": "#403e41",
    // "notebook.selectedCellBackground": "#c1c0c00c",
    // "notebook.selectedCellBorder": "#403e41",
    // "notebook.symbolHighlightBackground": "#ffffff0b",
    // "notebookEditorOverviewRuler.runningCellForeground": "#a9dc76",
    // "notebookScrollbarSlider.activeBackground": "#fcfcfa59",
    // "notebookScrollbarSlider.background": "#c1c0c026",
    // "notebookScrollbarSlider.hoverBackground": "#fcfcfa26",
    // "panel.dropBorder": "#ffd866",
    // "panelInput.border": "#403e41",
    // "panelSection.border": "#2d2a2e",
    // "panelSection.dropBackground": "#221f22bf",
    // "panelSectionHeader.background": "#80808033",
    // "peekViewEditorStickyScroll.background": "#403e41",
    // "pullRequests.closed": "#cb2431",
    // "pullRequests.draft": "#6e7681",
    // "pullRequests.merged": "#8957e5",
    // "pullRequests.notification": "#78dce8",
    // "pullRequests.open": "#3fb950",
    // "quickInput.background": "#403e41",
    // "quickInput.foreground": "#fcfcfa",
    // "quickInputList.focusBackground": "#fcfcfa0c",
    // "quickInputList.focusForeground": "#ffd866",
    // "quickInputTitle.background": "#ffffff1b",
    // "scm.providerBorder": "#454545",
    // "search.resultsInfoForeground": "#fcfcfaa6",
    // "searchEditor.findMatchBackground": "#fcfcfa19",
    // "searchEditor.findMatchBorder": "#00000000",
    // "searchEditor.textInputBorder": "#403e41",
    // "settings.focusedRowBackground": "#fcfcfa07",
    // "settings.focusedRowBorder": "#727072",
    // "settings.headerBorder": "#2d2a2e",
    // "settings.sashBorder": "#2d2a2e",
    // "settings.settingsHeaderHoverForeground": "#ffd866b3",
    // "sideBySideEditor.horizontalBorder": "#221f22",
    // "sideBySideEditor.verticalBorder": "#221f22",
    // "statusBar.offlineBackground": "#6c1717",
    // "statusBar.offlineForeground": "#a9dc76",
    // "statusBarItem.compactHoverBackground": "#ffffff33",
    // "statusBarItem.prominentForeground": "#727072",
    // "tab.unfocusedActiveBackground": "#2d2a2e",
    // "tab.unfocusedInactiveBackground": "#2d2a2e",
    // "terminal.border": "#2d2a2e",
    // "terminal.dropBackground": "#221f22bf",
    // "terminal.findMatchBackground": "#fcfcfa26",
    // "terminal.findMatchHighlightBackground": "#fcfcfa26",
    // "terminal.hoverHighlightBackground": "#fcfcfa06",
    // "terminal.inactiveSelectionBackground": "#fcfcfa13",
    // "terminal.tab.activeBorder": "#ffd866",
    // "terminalOverviewRuler.cursorForeground": "#a0a0a0cc",
    // "terminalOverviewRuler.findMatchForeground": "#fcfcfa26",
    // "testing.peekBorder": "#ff6188",
    // "testing.peekHeaderBackground": "#ff61881a",
    // "toolbar.activeBackground": "#63666750",
    // "toolbar.hoverBackground": "#5a5d5e50",
    // "tree.inactiveIndentGuidesStroke": "#58585866",
    // "tree.indentGuidesStroke": "#585858",
    // "tree.tableColumnsBorder": "#cccccc20",
    // "tree.tableOddRowsBackground": "#fcfcfa0a",
    // "walkthrough.stepTitle.foreground": "#ffffff",
    // "welcomePage.tileBorder": "#ffffff1a",
    // "activityBar.activeBackground": null,
    // "button.border": null,
    // "contrastActiveBorder": null,
    // "contrastBorder": null,
    // "debugToolBar.border": null,
    // "diffEditor.border": null,
    // "diffEditor.insertedTextBorder": null,
    // "diffEditor.removedTextBorder": null,
    // "editor.selectionForeground": null,
    // "editor.snippetFinalTabstopHighlightBackground": null,
    // "editor.snippetTabstopHighlightBorder": null,
    // "editor.symbolHighlightBorder": null,
    // "editorGhostText.background": null,
    // "editorGhostText.border": null,
    // "editorGroup.dropIntoPromptBorder": null,
    // "editorGroupHeader.border": null,
    // "editorLineNumber.dimmedForeground": null,
    // "editorOverviewRuler.background": null,
    // "editorSuggestWidget.selectedIconForeground": null,
    // "editorUnnecessaryCode.border": null,
    // "editorWidget.resizeBorder": null,
    // "list.activeSelectionIconForeground": null,
    // "list.focusAndSelectionOutline": null,
    // "list.inactiveFocusOutline": null,
    // "list.inactiveSelectionIconForeground": null,
    // "menu.selectionBorder": null,
    // "menubar.selectionBorder": null,
    // "minimap.background": null,
    // "notebook.cellHoverBackground": null,
    // "notebook.focusedCellBackground": null,
    // "notebook.inactiveSelectedCellBorder": null,
    // "notebook.outputContainerBackgroundColor": null,
    // "notebook.outputContainerBorderColor": null,
    // "panelSectionHeader.border": null,
    // "panelSectionHeader.foreground": null,
    // "peekViewEditor.matchHighlightBorder": null,
    // "quickInput.list.focusBackground": null,
    // "quickInputList.focusIconForeground": null,
    // "sideBarSectionHeader.border": null,
    // "tab.activeBorderTop": null,
    // "tab.unfocusedActiveBorderTop": null,
    // "terminal.findMatchBorder": null,
    // "terminal.findMatchHighlightBorder": null,
    // "terminal.selectionForeground": null,
    // "toolbar.hoverOutline": null,
    // "welcomePage.background": null,
    // "widget.border": null,
    // "window.activeBorder": null,
    // "window.inactiveBorder": null
  },
  tokenColors: [
    {
      scope: [
        "comment",
        "comment keyword",
        "comment markup.underline.link",
        "comment string",
        "comment punctuation.definition",
        "comment punctuation",
        "comment text",
      ],
      settings: {
        foreground: "#727072",
        fontStyle: "italic",
      },
    },
    {
      scope: "comment storage.type",
      settings: {
        foreground: "#727072",
      },
    },
    {
      scope: "comment entity.name.type",
      settings: {
        foreground: "#C1C0C0",
      },
    },
    {
      scope: ["comment variable", "comment variable.other"],
      settings: {
        foreground: "#C1C0C0",
      },
    },
    {
      scope: "comment keyword.codetag.notation",
      settings: {
        foreground: "#AB9DF2",
      },
    },
    {
      scope: "comment.git-status.header.remote",
      settings: {
        foreground: "#FF6188",
      },
    },
    {
      scope: "comment.git-status.header.local",
      settings: {
        foreground: "#78DCE8",
      },
    },
    {
      scope: "comment.other.git-status.head",
      settings: {
        foreground: "#FCFCFA",
      },
    },
    {
      scope: [
        "string.quoted.docstring",
        "string.quoted.docstring punctuation.definition",
      ],
      settings: {
        foreground: "#727072",
      },
    },
    {
      scope: "constant",
      settings: {
        foreground: "#AB9DF2",
      },
    },
    {
      scope: "constant.other",
      settings: {
        foreground: "#FCFCFA",
      },
    },
    {
      scope: "constant.other.caps",
      settings: {
        foreground: "#AB9DF2",
      },
    },
    {
      scope: "constant.other.placeholder.c",
      settings: {
        foreground: "#FC9867",
      },
    },
    {
      scope: "constant.other.property",
      settings: {
        foreground: "#AB9DF2",
      },
    },
    {
      scope: "constant.other.citation.latex",
      settings: {
        foreground: "#AB9DF2",
      },
    },
    {
      scope: "constant.other.color",
      settings: {
        foreground: "#AB9DF2",
      },
    },
    {
      scope: "constant.other.character-class.escape",
      settings: {
        foreground: "#AB9DF2",
      },
    },
    {
      scope: "constant.other.key",
      settings: {
        foreground: "#AB9DF2",
      },
    },
    {
      scope: "constant.other.symbol",
      settings: {
        foreground: "#FC9867",
      },
    },
    {
      scope: "constant.other.elm",
      settings: {
        foreground: "#78DCE8",
      },
    },
    {
      scope: "constant.numeric",
      settings: {
        foreground: "#AB9DF2",
      },
    },
    {
      scope: "constant.language",
      settings: {
        foreground: "#AB9DF2",
      },
    },
    {
      scope: "constant.character.escape",
      settings: {
        foreground: "#AB9DF2",
      },
    },
    {
      scope: "constant.numeric.line-number.find-in-files",
      settings: {
        foreground: "#5B595C",
      },
    },
    {
      scope: "constant.numeric.line-number.match.find-in-files",
      settings: {
        foreground: "#FFD866",
      },
    },
    {
      scope: "entity.name.section",
      settings: {
        foreground: "#FFD866",
      },
    },
    {
      scope: [
        "entity.name.function",
        "entity.name.function.templated",
        "entity.name.function.member.static",
      ],
      settings: {
        foreground: "#A9DC76",
      },
    },
    {
      scope: [
        "entity.name.type.class.templated",
        "entity.name.type.class.generic",
        "entity.name.type.namespace",
      ],
      settings: {
        foreground: "#78DCE8",
      },
    },
    {
      scope: "entity.name.label",
      settings: {
        foreground: "#AB9DF2",
      },
    },
    {
      scope: "entity.name.function.preprocessor",
      settings: {
        foreground: "#78DCE8",
      },
    },
    {
      scope: "entity.name",
      settings: {
        foreground: "#A9DC76",
      },
    },
    {
      scope: "entity.name.class",
      settings: {
        foreground: "#78DCE8",
      },
    },
    {
      scope: "entity.name.constant",
      settings: {
        foreground: "#AB9DF2",
      },
    },
    {
      scope: "entity.name.namespace",
      settings: {
        foreground: "#FCFCFA",
      },
    },
    {
      scope: "entity.other.inherited-class",
      settings: {
        foreground: "#78DCE8",
        fontStyle: "italic",
      },
    },
    {
      scope: "entity.name.function",
      settings: {
        foreground: "#A9DC76",
      },
    },
    {
      scope: [
        "entity.name.tag",
        "entity.name.tag.js.jsx support.class.component.js.jsx",
        "entity.name.tag support.class.component",
        "source.vue support.class.component",
      ],
      settings: {
        foreground: "#FF6188",
      },
    },
    {
      scope: "entity.name.function.operator",
      settings: {
        foreground: "#FF6188",
      },
    },
    {
      scope: [
        "meta.brackets entity.name.function.operator",
        "punctuation.separator entity.name.function.operator",
      ],
      settings: {
        foreground: "#939293",
      },
    },
    {
      scope: [
        "entity.name.type",
        "entity.name.type.class.reference",
        "entity.name.type.class.value",
      ],
      settings: {
        foreground: "#78DCE8",
      },
    },
    {
      scope: "entity.other.attribute-name",
      settings: {
        foreground: "#78DCE8",
        fontStyle: "italic",
      },
    },
    {
      scope: [
        "entity.other.attribute-name.class.css",
        "entity.other.attribute-name.parent-selector-suffix.css",
        "entity.other.attribute-name.parent-selector-suffix.css punctuation.definition.entity.css",
        "entity.other.attribute-name.css",
        "entity.other.animation-name.css",
      ],
      settings: {
        foreground: "#A9DC76",
      },
    },
    {
      scope: "entity.other.attribute-name.id.css",
      settings: {
        foreground: "#FC9867",
      },
    },
    {
      scope: [
        "entity.other.attribute-name.pseudo-class.css",
        "entity.other.pseudo-class.css",
        "entity.other.pseudo-element.css",
      ],
      settings: {
        foreground: "#78DCE8",
        fontStyle: "italic",
      },
    },
    {
      scope: ["entity.name.function", "support.function"],
      settings: {
        foreground: "#A9DC76",
      },
    },
    {
      scope: "entity.other.git-status.hex",
      settings: {
        foreground: "#AB9DF2",
      },
    },
    {
      scope: "entity.other.jinja2.delimiter",
      settings: {
        foreground: "#939293",
      },
    },
    {
      scope: "entity.name.operator.custom-literal",
      settings: {
        foreground: "#FCFCFA",
      },
    },
    {
      scope: "entity.name.operator.custom-literal.string",
      settings: {
        foreground: "#FFD866",
      },
    },
    {
      scope: "entity.name.operator.custom-literal.number",
      settings: {
        foreground: "#AB9DF2",
      },
    },
    {
      scope: "entity.name.type.rust",
      settings: {
        foreground: "#78DCE8",
      },
    },
    {
      scope: "entity.name.lifetime.rust",
      settings: {
        foreground: "#FF6188",
      },
    },
    {
      scope: "invalid",
      settings: {
        foreground: "#FF6188",
        fontStyle: "italic underline",
      },
    },
    {
      scope: "invalid.deprecated",
      settings: {
        foreground: "#FC9867",
        fontStyle: "italic underline",
      },
    },
    {
      scope: "keyword",
      settings: {
        foreground: "#FF6188",
      },
    },
    {
      scope: "keyword.control",
      settings: {
        foreground: "#FF6188",
      },
    },
    {
      scope: "keyword.control.directive",
      settings: {
        foreground: "#FF6188",
      },
    },
    {
      scope: [
        "keyword.operator",
        "keyword.operator.member",
        "keyword.operator.new",
      ],
      settings: {
        foreground: "#FF6188",
      },
    },
    {
      scope: "keyword.other.substitution",
      settings: {
        foreground: "#939293",
      },
    },
    {
      scope: ["keyword.other.template.begin", "keyword.other.template.end"],
      settings: {
        foreground: "#FF6188",
      },
    },
    {
      scope: [
        "keyword.operator.heading.restructuredtext",
        "keyword.operator.table.row.restructuredtext keyword.operator.table.data.restructuredtext",
      ],
      settings: {
        foreground: "#939293",
      },
    },
    {
      scope: "keyword.other.parenthesis.elm",
      settings: {
        foreground: "#939293",
      },
    },
    {
      scope: [
        "keyword.other.fn.rust",
        "keyword.other.rust",
        "keyword.other.unsafe.rust",
        "keyword.other.where.rust",
      ],
      settings: {
        foreground: "#78DCE8",
      },
    },
    {
      scope: ["keyword.control.rust", "keyword.operator.misc.rust"],
      settings: {
        foreground: "#FF6188",
      },
    },
    {
      scope: [
        "keyword.declaration.class.ruby",
        "keyword.declaration.function.ruby",
        "keyword.declaration.namespace.ruby",
      ],
      settings: {
        foreground: "#FF6188",
      },
    },
    {
      scope: "markup.italic",
      settings: {
        fontStyle: "italic",
      },
    },
    {
      scope: "markup.bold",
      settings: {
        fontStyle: "bold",
      },
    },
    {
      scope: "markup.heading",
      settings: {
        foreground: "#FFD866",
      },
    },
    {
      scope: "markup.raw",
      settings: {
        foreground: "#FC9867",
      },
    },
    {
      scope: "markup.underline",
      settings: {
        fontStyle: "underline",
      },
    },
    {
      scope: "markup.underline.link",
      settings: {
        foreground: "#A9DC76",
      },
    },
    {
      scope: [
        "markup.inserted",
        "markup.inserted punctuation.definition.inserted",
      ],
      settings: {
        foreground: "#A9DC76",
      },
    },
    {
      scope: [
        "markup.deleted",
        "markup.deleted punctuation.definition.deleted",
      ],
      settings: {
        foreground: "#FF6188",
      },
    },
    {
      scope: [
        "markup.changed",
        "markup.changed punctuation.definition.changed",
      ],
      settings: {
        foreground: "#FFD866",
      },
    },
    {
      scope: [
        "markup.ignored",
        "markup.ignored punctuation.definition.ignored",
      ],
      settings: {
        foreground: "#939293",
      },
    },
    {
      scope: "markup.untracked",
      settings: {
        foreground: "#939293",
      },
    },
    {
      scope: "markup.quote",
      settings: {
        fontStyle: "italic",
      },
    },
    {
      scope: [
        "meta.brace.round",
        "meta.brace.square",
        "meta.brace.curly",
        "meta.delimiter.comma.js",
        "meta.function-call.without-arguments.js",
        "meta.function-call.method.without-arguments.js",
      ],
      settings: {
        foreground: "#939293",
      },
    },
    {
      scope: [
        "meta.function-call.generic.python",
        "support.function.builtin.python",
      ],
      settings: {
        foreground: "#A9DC76",
      },
    },
    {
      scope: "meta.function-call.python meta.function-call.arguments.python",
      settings: {
        foreground: "#FCFCFA",
      },
    },
    {
      scope: "meta.instance.constructor",
      settings: {
        foreground: "#A9DC76",
      },
    },
    {
      scope: [
        "meta.attribute-with-value.class string",
        "meta.attribute.class.html string",
      ],
      settings: {
        foreground: "#A9DC76",
      },
    },
    {
      scope: [
        "meta.attribute-with-value.id string",
        "meta.attribute.id.html string",
      ],
      settings: {
        foreground: "#FC9867",
      },
    },
    {
      scope: "source.json meta.mapping.key string",
      settings: {
        foreground: "#FCFCFA",
      },
    },
    {
      scope: "source.yaml meta.mapping.key string",
      settings: {
        foreground: "#FF6188",
      },
    },
    {
      scope: "meta.object.member",
      settings: {
        foreground: "#FCFCFA",
      },
    },
    {
      scope: "meta.property-list.css variable.other",
      settings: {
        foreground: "#FC9867",
      },
    },
    {
      scope: ["entity.name.constant.preprocessor", "meta.preprocessor"],
      settings: {
        foreground: "#AB9DF2",
      },
    },
    {
      scope: "meta.diff.git-diff.header",
      settings: {
        foreground: "#FFD866",
      },
    },
    {
      scope: "meta.type_params.rust",
      settings: {
        foreground: "#FCFCFA",
      },
    },
    {
      scope: [
        "meta.attribute.rust",
        "meta.annotation.rust",
        "variable.language.rust",
        "variable.annotation.rust",
        "meta.annotation.rust string",
        "meta.annotation.rust keyword",
        "meta.annotation.rust keyword.operator",
        "meta.attribute.rust string",
      ],
      settings: {
        foreground: "#C1C0C0",
      },
    },
    {
      scope: "punctuation",
      settings: {
        foreground: "#939293",
      },
    },
    {
      scope: [
        "punctuation.definition.tag",
        "punctuation.definition.tag source",
        "punctuation.definition.group.begin.ruby",
        "punctuation.definition.group.end.ruby",
        "punctuation.definition.group.begin.css",
        "punctuation.definition.group.end.css",
        "punctuation.definition.string.end.html source.css",
      ],
      settings: {
        foreground: "#939293",
      },
    },
    {
      scope: "punctuation.definition.group",
      settings: {
        foreground: "#FCFCFA",
      },
    },
    {
      scope: "punctuation.definition.comment",
      settings: {
        foreground: "#727072",
      },
    },
    {
      scope: [
        "punctuation.definition.variable",
        "punctuation.definition.keyword.scss",
        "punctuation.definition.entity.css",
      ],
      settings: {
        foreground: "#C1C0C0",
      },
    },
    {
      scope: [
        "punctuation.section.embedded",
        "punctuation.section.embedded entity.name.tag",
        "punctuation.section.embedded constant.other",
        "punctuation.section.embedded source",
        "punctuation.section.embedded.begin",
      ],
      settings: {
        foreground: "#FC9867",
      },
    },
    {
      scope: [
        "punctuation.template-string.element.begin",
        "punctuation.template-string.element.end",
        "punctuation.definition.string.template.begin",
        "punctuation.definition.string.template.end",
        "string.quoted.template punctuation.definition.string.begin",
        "string.quoted.template punctuation.definition.string.end",
        "punctuation.definition.template-expression.begin",
        "punctuation.definition.template-expression.end",
      ],
      settings: {
        foreground: "#FF6188",
      },
    },
    {
      scope: [
        "meta.paragraph.markdown meta.dummy.line-break",
        "meta.paragraph.markdown meta.hard-line-break.markdown",
      ],
      settings: {
        background: "#AB9DF2",
      },
    },
    {
      scope: "markup.underline.link punctuation",
      settings: {
        foreground: "#A9DC76",
      },
    },
    {
      scope: "region.redish",
      settings: {
        foreground: "#FF6188",
        background: "#FF618859",
      },
    },
    {
      scope: "region.orangish",
      settings: {
        foreground: "#FC9867",
        background: "#FC986759",
      },
    },
    {
      scope: "region.yellowish",
      settings: {
        foreground: "#FFD866",
        background: "#FFD86659",
      },
    },
    {
      scope: "region.greenish",
      settings: {
        foreground: "#A9DC76",
        background: "#A9DC7659",
      },
    },
    {
      scope: "region.bluish",
      settings: {
        foreground: "#78DCE8",
        background: "#78DCE859",
      },
    },
    {
      scope: "region.purplish",
      settings: {
        foreground: "#AB9DF2",
        background: "#AB9DF259",
      },
    },
    {
      scope: "region.pinkish",
      settings: {
        foreground: "#FF6188",
        background: "#FF618859",
      },
    },
    {
      scope: "region.whitish",
      settings: {
        foreground: "#FFFFFF",
      },
    },
    {
      scope: "source",
      settings: {
        foreground: "#FCFCFA",
      },
    },
    {
      scope: ["source.scss", "source.sass"],
      settings: {
        foreground: "#939293",
      },
    },
    {
      scope: [
        "source.sass variable.other",
        "source.sass variable.sass",
        "source.scss variable.other",
        "source.scss variable.scss",
        "source.scss variable.sass",
        "source.css variable.other",
        "source.css variable.scss",
        "source.less variable.other",
        "source.less variable.other.less",
        "source.less variable.declaration.less",
      ],
      settings: {
        foreground: "#FC9867",
        fontStyle: "italic",
      },
    },
    {
      scope: "source.git-show.commit.sha",
      settings: {
        foreground: "#AB9DF2",
      },
    },
    {
      scope: [
        "source.git-show.author",
        "source.git-show.date",
        "source.git-diff.command",
        "source.git-diff.command meta.diff.git-diff.header.from-file",
        "source.git-diff.command meta.diff.git-diff.header.to-file",
      ],
      settings: {
        foreground: "#939293",
      },
    },
    {
      scope: [
        "source.git-show meta.diff.git-diff.header.extended.index.from-sha",
        "source.git-show meta.diff.git-diff.header.extended.index.to-sha",
      ],
      settings: {
        foreground: "#AB9DF2",
      },
    },
    {
      scope: "source.git-show meta.diff.range.unified",
      settings: {
        foreground: "#FC9867",
      },
    },
    {
      scope: [
        "source.git-show meta.diff.header.from-file",
        "source.git-show meta.diff.header.to-file",
      ],
      settings: {
        foreground: "#939293",
      },
    },
    {
      scope: "storage",
      settings: {
        foreground: "#FF6188",
      },
    },
    {
      scope: "storage.type",
      settings: {
        foreground: "#78DCE8",
        fontStyle: "italic",
      },
    },
    {
      scope: "storage.type.extends",
      settings: {
        foreground: "#FF6188",
        fontStyle: "normal",
      },
    },
    {
      scope: "storage.type.function.arrow",
      settings: {
        foreground: "#FF6188",
        fontStyle: "normal",
      },
    },
    {
      scope: ["storage.modifier", "storage.type.modifier"],
      settings: {
        foreground: "#FF6188",
        fontStyle: "italic",
      },
    },
    {
      scope: "storage.class.restructuredtext.ref",
      settings: {
        foreground: "#AB9DF2",
      },
    },
    {
      scope: [
        "storage.modifier.visibility.rust",
        "storage.modifier.lifetime.rust",
      ],
      settings: {
        foreground: "#FF6188",
      },
    },
    {
      scope: [
        "storage.modifier.const.rust",
        "storage.modifier.dyn.rust",
        "storage.modifier.mut.rust",
        "storage.modifier.static.rust",
        "storage.type.rust",
        "storage.type.core.rust",
        "storage.class.std.rust",
      ],
      settings: {
        foreground: "#78DCE8",
      },
    },
    {
      scope: [
        "storage.type.rust",
        "storage.modifier.const.rust",
        "storage.modifier.dyn.rust",
        "storage.modifier.mut.rust",
        "storage.modifier.static.rust",
        "keyword.other.rust",
        "keyword.other.where.rust",
      ],
      settings: {
        foreground: "#FF6188",
      },
    },
    {
      scope: "string",
      settings: {
        foreground: "#FFD866",
      },
    },
    {
      scope: "string.unquoted.label",
      settings: {
        foreground: "#FCFCFA",
      },
    },
    {
      scope: "string source",
      settings: {
        foreground: "#FCFCFA",
      },
    },
    {
      scope: [
        "string source punctuation.section.embedded",
        "string punctuation.definition.string source",
      ],
      settings: {
        foreground: "#939293",
      },
    },
    {
      scope: ["string.other.link.title", "string.other.link.description"],
      settings: {
        foreground: "#FF6188",
      },
    },
    {
      scope: "string.other.link.description.title",
      settings: {
        foreground: "#78DCE8",
      },
    },
    {
      scope: [
        "string.regexp punctuation.definition.string.begin",
        "string.regexp punctuation.definition.string.end",
      ],
      settings: {
        foreground: "#FF6188",
      },
    },
    {
      scope: ["string.other.ref", "string.other.restructuredtext.ref"],
      settings: {
        foreground: "#A9DC76",
      },
    },
    {
      scope: "string.other.git-status.help.key",
      settings: {
        foreground: "#C1C0C0",
      },
    },
    {
      scope: "string.other.git-status.remote",
      settings: {
        foreground: "#FF6188",
      },
    },
    {
      scope: "support.constant",
      settings: {
        foreground: "#78DCE8",
      },
    },
    {
      scope: "support.constant.handlebars",
      settings: {
        foreground: "#939293",
      },
    },
    {
      scope: "support.type.vendor-prefix.css",
      settings: {
        foreground: "#C1C0C0",
      },
    },
    {
      scope: "support.function",
      settings: {
        foreground: "#A9DC76",
      },
    },
    {
      scope: "support.function.delimiter.elm",
      settings: {
        foreground: "#939293",
      },
    },
    {
      scope: ["support.type", "entity.name.type.object.console"],
      settings: {
        foreground: "#78DCE8",
        fontStyle: "italic",
      },
    },
    {
      scope: "support.variable",
      settings: {
        foreground: "#78DCE8",
      },
    },
    {
      scope: "support.type.property-name",
      settings: {
        foreground: "#FCFCFA",
        fontStyle: "normal",
      },
    },
    {
      scope: "support.class",
      settings: {
        foreground: "#78DCE8",
      },
    },
    {
      scope: "support.constant.core.rust",
      settings: {
        foreground: "#AB9DF2",
      },
    },
    {
      scope: "text",
      settings: {
        foreground: "#FCFCFA",
      },
    },
    {
      scope: "text.find-in-files",
      settings: {
        foreground: "#FCFCFA",
      },
    },
    {
      scope: ["variable", "variable.other"],
      settings: {
        foreground: "#FCFCFA",
      },
    },
    {
      scope: ["variable.parameter", "parameters variable.function"],
      settings: {
        foreground: "#FC9867",
        fontStyle: "italic",
      },
    },
    {
      scope: [
        "variable.language",
        "variable.parameter.function.language.special.self.python",
        "variable.parameter.function.language.special.cls.python",
      ],
      settings: {
        foreground: "#C1C0C0",
        fontStyle: "italic",
      },
    },
    {
      scope: "variable.language.arguments",
      settings: {
        foreground: "#AB9DF2",
      },
    },
    {
      scope: "variable.other.class",
      settings: {
        foreground: "#78DCE8",
      },
    },
    {
      scope: "variable.other.constant",
      settings: {
        foreground: "#AB9DF2",
      },
    },
    {
      scope: "variable.other.readwrite",
      settings: {
        foreground: "#FCFCFA",
      },
    },
    {
      scope: "variable.other.member",
      settings: {
        foreground: "#FCFCFA",
      },
    },
    {
      scope: "variable.other.enummember",
      settings: {
        foreground: "#AB9DF2",
      },
    },
    {
      scope: [
        "variable.other.property",
        "variable.other.property.static",
        "variable.other.event",
      ],
      settings: {
        foreground: "#FCFCFA",
      },
    },
    {
      scope: "variable.function",
      settings: {
        foreground: "#A9DC76",
      },
    },
    {
      scope: "variable.other.substitution",
      settings: {
        foreground: "#FC9867",
      },
    },
    {
      scope: [
        "source.ruby variable.other.readwrite.instance.ruby",
        "source.ruby variable.other.readwrite.class.ruby",
      ],
      settings: {
        foreground: "#AB9DF2",
      },
    },
    {
      scope: "source.jinja2 variable.other.jinja2.block",
      settings: {
        foreground: "#A9DC76",
      },
    },
    {
      scope: "source.jinja2 variable.other.jinja2",
      settings: {
        foreground: "#FC9867",
      },
    },
    {
      scope: "token.info-token",
      settings: {
        foreground: "#6796E6",
      },
    },
    {
      scope: "token.warn-token",
      settings: {
        foreground: "#CD9731",
      },
    },
    {
      scope: "token.error-token",
      settings: {
        foreground: "#F44747",
      },
    },
    {
      scope: "token.debug-token",
      settings: {
        foreground: "#B267E6",
      },
    },
  ],
});
