const alpha = (hexColor, hexAlpha) => `${hexColor}${hexAlpha}`;

/**
 *
 * @param {import("../schemes/seashells-dark.js")} config
 * @returns
 */
module.exports = ({ name, type, scheme }) => ({
  name,
  $schema: "vscode://schemas/color-theme",
  type,
  colors: {
    "activityBar.activeBackground": scheme.ansi.green,
    // "activityBar.activeBorder": scheme.ansi.brightWhite,
    // "activityBar.activeFocusBorder": null,
    "activityBar.background": scheme.background,
    // "activityBar.border": scheme.ansi.brightBlack,
    // "activityBar.dropBorder": scheme.foreground,
    "activityBar.foreground": scheme.ansi.brightWhite,
    // "activityBar.inactiveForeground": alpha(scheme.foreground, "66"),

    "activityBarBadge.background": scheme.ansi.green,
    "activityBarBadge.foreground": scheme.ansi.brightWhite,

    // "badge.background": scheme.ansi.black,
    // "badge.foreground": "#ffffff",

    // "banner.background": "#2c313a",
    // "banner.foreground": scheme.foreground,
    // "banner.iconForeground": "#3794ff",

    // "breadcrumb.activeSelectionForeground": "#828aa0",
    // "breadcrumb.background": scheme.ansi.black,
    // "breadcrumb.focusForeground": "#828aa0",
    // "breadcrumb.foreground": alpha(scheme.foreground, "cc"),

    // "breadcrumbPicker.background": scheme.background,

    // "button.background": "#404754",
    // "button.border": null,
    // "button.foreground": scheme.foreground,
    // "button.hoverBackground": "#5c6478",
    // "button.secondaryBackground": "#3a3d41",
    // "button.secondaryForeground": "#ffffff",
    // "button.secondaryHoverBackground": "#45494e",
    // "button.separator": alpha(scheme.foreground, "66"),

    // "charts.blue": "#3794ff",
    // "charts.foreground": scheme.foreground,
    // "charts.green": "#89d185",
    // "charts.lines": alpha(scheme.foreground, "80"),
    // "charts.orange": "#d18616",
    // "charts.purple": "#b180d7",
    // "charts.red": scheme.ansi.magenta,
    // "charts.yellow": scheme.ansi.yellow,

    // "chat.requestBackground": alpha("#ffffff", "08"),
    // "chat.requestBorder": alpha("#ffffff", "1a"),

    // "checkbox.background": "#1d1f23",
    // "checkbox.border": "#181a1f",
    // "checkbox.foreground": scheme.foreground,
    // "checkbox.selectBackground": scheme.background,
    // "checkbox.selectBorder": "#c5c5c5",

    // "commandCenter.activeBackground": alpha("#ffffff", "14"),
    // "commandCenter.activeBorder": alpha("#9da5b4", "4d"),
    // "commandCenter.activeForeground": "#9da5b4",
    // "commandCenter.background": alpha("#ffffff", "0d"),
    // "commandCenter.border": alpha("#9da5b4", "33"),
    // "commandCenter.foreground": "#9da5b4",
    // "commandCenter.inactiveBorder": alpha("#6b717d", "40"),
    // "commandCenter.inactiveForeground": "#6b717d",

    // "commentsView.resolvedIcon": alpha("#cccccc", "80"),
    // "commentsView.unresolvedIcon": alpha(scheme.foreground, "00"),

    // "contrastActiveBorder": null,
    // "contrastBorder": null,

    // "debugConsole.errorForeground": scheme.ansi.red,
    // "debugConsole.infoForeground": "#3794ff",
    // "debugConsole.sourceForeground": scheme.foreground,
    // "debugConsole.warningForeground": scheme.ansi.yellow,

    // "debugConsoleInputIcon.foreground": scheme.foreground,

    // "debugExceptionWidget.background": "#420b0d",
    // "debugExceptionWidget.border": "#a31515",

    // "debugIcon.breakpointCurrentStackframeForeground": "#ffcc00",
    // "debugIcon.breakpointDisabledForeground": "#848484",
    // "debugIcon.breakpointForeground": "#e51400",
    // "debugIcon.breakpointStackframeForeground": "#89d185",
    // "debugIcon.breakpointUnverifiedForeground": "#848484",
    // "debugIcon.continueForeground": "#75beff",
    // "debugIcon.disconnectForeground": "#f48771",
    // "debugIcon.pauseForeground": "#75beff",
    // "debugIcon.restartForeground": "#89d185",
    // "debugIcon.startForeground": "#89d185",
    // "debugIcon.stepBackForeground": "#75beff",
    // "debugIcon.stepIntoForeground": "#75beff",
    // "debugIcon.stepOutForeground": "#75beff",
    // "debugIcon.stepOverForeground": "#75beff",
    // "debugIcon.stopForeground": "#f48771",

    // "debugTokenExpression.boolean": "#4e94ce",
    // "debugTokenExpression.error": "#f48771",
    // "debugTokenExpression.name": "#c586c0",
    // "debugTokenExpression.number": "#b5cea8",
    // "debugTokenExpression.string": "#ce9178",
    // "debugTokenExpression.value": alpha("#cccccc", "99"),

    // "debugToolBar.background": scheme.background,
    // "debugToolBar.border": null,

    // "debugView.exceptionLabelBackground": "#6c2022",
    // "debugView.exceptionLabelForeground": scheme.foreground,
    // "debugView.stateLabelBackground": alpha("#888888", "44"),
    // "debugView.stateLabelForeground": scheme.foreground,
    // "debugView.valueChangedHighlight": "#569cd6",

    // descriptionForeground: scheme.foreground,

    // "diffEditor.border": null,
    // "diffEditor.diagonalFill": alpha("#cccccc", "33"),
    // "diffEditor.insertedLineBackground": alpha("#9bb955", "33"),
    // "diffEditor.insertedTextBackground": alpha(scheme.ansi.cyan, "80"),
    // "diffEditor.insertedTextBorder": null,
    // "diffEditor.move.border": alpha("#8b8b8b", "9c"),
    // "diffEditor.removedLineBackground": alpha("#ff0000", "33"),
    // "diffEditor.removedTextBackground": alpha(scheme.ansi.magenta, "80"),
    // "diffEditor.removedTextBorder": null,
    // "diffEditor.unchangedCodeBackground": alpha("#747474", "29"),
    // "diffEditor.unchangedRegionBackground": "#3e3e3e",
    // "diffEditor.unchangedRegionForeground": "#a3a2a2",
    // "diffEditorGutter.insertedLineBackground": null,
    // "diffEditorGutter.removedLineBackground": null,
    // "diffEditorOverview.insertedForeground": null,
    // "diffEditorOverview.removedForeground": null,

    // "disabledForeground": alpha("#cccccc", "80"),

    // "dropdown.background": "#1d1f23",
    // "dropdown.border": "#181a1f",
    // "dropdown.foreground": scheme.foreground,
    // "dropdown.listBackground": null,

    "editor.background": scheme.background,
    "editor.foreground": scheme.foreground,

    // "editor.findMatchBackground": alpha(scheme.ansi.blue, "60"),
    // "editor.findMatchBorder": null,
    // "editor.findMatchHighlightBackground": "#314365",
    // "editor.findMatchHighlightBorder": null,
    // "editor.findRangeHighlightBackground": alpha("#3a3d41", "66"),
    // "editor.findRangeHighlightBorder": null,
    // "editor.focusedStackFrameHighlightBackground": alpha("#7abd7a", "4d"),
    // "editor.foldBackground": alpha("#677696", "1d"),
    // "editor.hoverHighlightBackground": alpha("#264f78", "40"),
    // "editor.inactiveSelectionBackground": alpha("#677696", "30"),
    // "editor.inlineValuesBackground": alpha("#ffc800", "33"),
    // "editor.inlineValuesForeground": alpha("#ffffff", "80"),
    // "editor.lineHighlightBackground": "#383e4a",
    // "editor.lineHighlightBorder": "#282828",
    // "editor.linkedEditingBackground": alpha("#ff0000", "4d"),
    // "editor.rangeHighlightBackground": alpha(scheme.ansi.blue, "30"),
    // "editor.rangeHighlightBorder": null,
    // "editor.selectionBackground": alpha("#677696", "60"),
    // "editor.selectionForeground": null,
    // "editor.selectionHighlightBackground": alpha("#ffffff", "10"),
    // "editor.selectionHighlightBorder": null,
    // "editor.snippetFinalTabstopHighlightBackground": null,
    // "editor.snippetFinalTabstopHighlightBorder": "#525252",
    // "editor.snippetTabstopHighlightBackground": alpha("#7c7c7c", "4d"),
    // "editor.snippetTabstopHighlightBorder": null,
    // "editor.stackFrameHighlightBackground": alpha("#ffff00", "33"),
    // "editor.symbolHighlightBackground": "#314365",
    // "editor.symbolHighlightBorder": null,
    // "editor.wordHighlightBackground": "#484e5b",
    // "editor.wordHighlightBorder": null,
    // "editor.wordHighlightStrongBackground": alpha(scheme.ansi.blue, "26"),
    // "editor.wordHighlightStrongBorder": null,
    // "editor.wordHighlightTextBackground": "#484e5b",
    // "editor.wordHighlightTextBorder": null,

    // "editorBracketHighlight.foreground1": "#ffd700",
    // "editorBracketHighlight.foreground2": "#da70d6",
    // "editorBracketHighlight.foreground3": "#179fff",
    // "editorBracketHighlight.foreground4": alpha("#000000", "00"),
    // "editorBracketHighlight.foreground5": alpha("#000000", "00"),
    // "editorBracketHighlight.foreground6": alpha("#000000", "00"),
    // "editorBracketHighlight.unexpectedBracket.foreground": alpha("#ff1212", "cc"),

    // "editorBracketMatch.background": alpha(scheme.ansi.blue, "30"),
    // "editorBracketMatch.border": alpha(scheme.ansi.blue, "30"),

    // "editorBracketPairGuide.activeBackground1": alpha("#000000", "00"),
    // "editorBracketPairGuide.activeBackground2": alpha("#000000", "00"),
    // "editorBracketPairGuide.activeBackground3": alpha("#000000", "00"),
    // "editorBracketPairGuide.activeBackground4": alpha("#000000", "00"),
    // "editorBracketPairGuide.activeBackground5": alpha("#000000", "00"),
    // "editorBracketPairGuide.activeBackground6": alpha("#000000", "00"),
    // "editorBracketPairGuide.background1": alpha("#000000", "00"),
    // "editorBracketPairGuide.background2": alpha("#000000", "00"),
    // "editorBracketPairGuide.background3": alpha("#000000", "00"),
    // "editorBracketPairGuide.background4": alpha("#000000", "00"),
    // "editorBracketPairGuide.background5": alpha("#000000", "00"),
    // "editorBracketPairGuide.background6": alpha("#000000", "00"),

    // "editorCodeLens.foreground": "#999999",

    // "editorCommentsWidget.rangeActiveBackground": alpha(scheme.foreground, "00"),
    // "editorCommentsWidget.rangeActiveBorder": alpha(scheme.foreground, "00"),
    // "editorCommentsWidget.rangeBackground": alpha(scheme.foreground, "00"),
    // "editorCommentsWidget.rangeBorder": alpha(scheme.foreground, "00"),
    // "editorCommentsWidget.resolvedBorder": alpha("#cccccc", "80"),
    // "editorCommentsWidget.unresolvedBorder": alpha(scheme.foreground, "00"),

    "editorCursor.background": scheme.cursorText,
    "editorCursor.foreground": scheme.cursor,

    // "editorError.background": null,
    // "editorError.border": null,
    "editorError.foreground": scheme.ansi.magenta,

    // "editorGhostText.background": null,
    // "editorGhostText.border": null,
    // "editorGhostText.foreground": alpha("#ffffff", "56"),

    // "editorGroup.border": "#181a1f",
    // "editorGroup.dropBackground": alpha("#53595d", "80"),
    // "editorGroup.dropIntoPromptBackground": scheme.background,
    // "editorGroup.dropIntoPromptBorder": null,
    // "editorGroup.dropIntoPromptForeground": scheme.foreground,
    // "editorGroup.emptyBackground": null,
    // "editorGroup.focusedEmptyBorder": null,

    // "editorGroupHeader.border": null,
    // "editorGroupHeader.noTabsBackground": scheme.ansi.black,
    "editorGroupHeader.tabsBackground": scheme.background,
    // "editorGroupHeader.tabsBorder": "#282c35",

    "editorGutter.addedBackground": scheme.ansi.green,
    // "editorGutter.background": "#282c35",
    // "editorGutter.commentGlyphForeground": scheme.foreground,
    // "editorGutter.commentRangeForeground": "#2c313a",
    // "editorGutter.commentUnresolvedGlyphForeground": scheme.foreground,
    "editorGutter.deletedBackground": scheme.ansi.red,
    // "editorGutter.foldingControlForeground": "#c5c5c5",
    // "editorGutter.modifiedBackground": scheme.ansi.blue,

    // "editorHint.border": null,
    // "editorHint.foreground": alpha("#eeeeee", "b3"),

    // "editorHoverWidget.background": scheme.background,
    // "editorHoverWidget.border": "#181a1f",
    // "editorHoverWidget.foreground": scheme.foreground,
    // "editorHoverWidget.highlightForeground": "#c5c5c5",
    // "editorHoverWidget.statusBarBackground": scheme.ansi.black,

    // "editorIndentGuide.activeBackground1": "#3b4048",
    // "editorIndentGuide.activeBackground2": alpha("#000000", "00"),
    // "editorIndentGuide.activeBackground3": alpha("#000000", "00"),
    // "editorIndentGuide.activeBackground4": alpha("#000000", "00"),
    // "editorIndentGuide.activeBackground5": alpha("#000000", "00"),
    // "editorIndentGuide.activeBackground6": alpha("#000000", "00"),
    // "editorIndentGuide.background1": "#3b4048",
    // "editorIndentGuide.background2": alpha("#000000", "00"),
    // "editorIndentGuide.background3": alpha("#000000", "00"),
    // "editorIndentGuide.background4": alpha("#000000", "00"),
    // "editorIndentGuide.background5": alpha("#000000", "00"),
    // "editorIndentGuide.background6": alpha("#000000", "00"),

    // "editorInfo.background": null,
    // "editorInfo.border": null,
    // "editorInfo.foreground": "#3794ff",

    // "editorInlayHint.background": alpha(scheme.ansi.black, "40"),
    // "editorInlayHint.foreground": scheme.foreground,
    // "editorInlayHint.parameterBackground": alpha(scheme.ansi.black, "40"),
    // "editorInlayHint.parameterForeground": scheme.foreground,
    // "editorInlayHint.typeBackground": alpha(scheme.ansi.black, "40"),
    // "editorInlayHint.typeForeground": scheme.foreground,

    // "editorLightBulb.foreground": "#ffcc00",
    // "editorLightBulbAutoFix.foreground": "#75beff",

    "editorLineNumber.activeForeground": scheme.ansi.brightBlack,
    // "editorLineNumber.dimmedForeground": null,
    "editorLineNumber.foreground": scheme.ansi.black,

    // "editorLink.activeForeground": scheme.foreground,

    // "editorMarkerNavigation.background": scheme.background,
    // "editorMarkerNavigationError.background": scheme.ansi.magenta,
    // "editorMarkerNavigationError.headerBackground": alpha(scheme.ansi.magenta, "1a"),
    // "editorMarkerNavigationInfo.background": "#3794ff",
    // "editorMarkerNavigationInfo.headerBackground": alpha("#3794ff", "1a"),
    // "editorMarkerNavigationWarning.background": scheme.ansi.yellow,
    // "editorMarkerNavigationWarning.headerBackground": alpha(scheme.ansi.yellow, "1a"),

    // "editorOverviewRuler.addedForeground": alpha(scheme.ansi.green, "99"),
    // "editorOverviewRuler.background": null,
    // "editorOverviewRuler.border": scheme.ansi.brightBlack,
    // "editorOverviewRuler.bracketMatchForeground": "#a0a0a0",
    // "editorOverviewRuler.commentForeground": "#2c313a",
    // "editorOverviewRuler.commentUnresolvedForeground": "#2c313a",
    // "editorOverviewRuler.commonContentForeground": alpha("#606060", "66"),
    // "editorOverviewRuler.currentContentForeground": alpha("#40c8ae", "80"),
    // "editorOverviewRuler.deletedForeground": alpha(scheme.ansi.magenta, "99"),
    // "editorOverviewRuler.errorForeground": alpha("#ff1212", "b3"),
    // "editorOverviewRuler.findMatchForeground": alpha("#d18616", "7e"),
    // "editorOverviewRuler.incomingContentForeground": alpha("#40a6ff", "80"),
    // "editorOverviewRuler.infoForeground": "#3794ff",
    // "editorOverviewRuler.modifiedForeground": alpha(scheme.ansi.blue, "99"),
    // "editorOverviewRuler.rangeHighlightForeground": alpha("#007acc", "99"),
    // "editorOverviewRuler.selectionHighlightForeground": alpha("#a0a0a0", "cc"),
    // "editorOverviewRuler.warningForeground": scheme.ansi.yellow,
    // "editorOverviewRuler.wordHighlightForeground": alpha("#a0a0a0", "cc"),
    // "editorOverviewRuler.wordHighlightStrongForeground": alpha("#c0a0c0", "cc"),
    // "editorOverviewRuler.wordHighlightTextForeground": alpha("#a0a0a0", "cc"),

    // "editorPane.background": scheme.ansi.black,

    "editorRuler.foreground": alpha(scheme.ansi.cyan, "33"),

    // "editorStickyScroll.background": scheme.ansi.black,
    // "editorStickyScrollHover.background": "#2a2d2e",

    // "editorSuggestWidget.background": scheme.background,
    // "editorSuggestWidget.border": "#181a1f",
    // "editorSuggestWidget.focusHighlightForeground": "#c5c5c5",
    // "editorSuggestWidget.foreground": scheme.foreground,
    // "editorSuggestWidget.highlightForeground": scheme.ansi.brightCyan,
    // "editorSuggestWidget.selectedBackground": "#2c313a",
    // "editorSuggestWidget.selectedForeground": scheme.foreground,
    // "editorSuggestWidget.selectedIconForeground": null,

    // "editorSuggestWidgetStatus.foreground": alpha(scheme.foreground, "80"),

    // "editorUnicodeHighlight.background": alpha("#bd9b03", "26"),
    // "editorUnicodeHighlight.border": "#bd9b03",

    // "editorUnnecessaryCode.border": null,
    // "editorUnnecessaryCode.opacity": alpha("#000000", "aa"),

    // "editorWarning.background": null,
    // "editorWarning.border": null,
    // "editorWarning.foreground": scheme.ansi.yellow,

    // "editorWhitespace.foreground": "#3b4048",

    // "editorWidget.background": scheme.background,
    // "editorWidget.border": "#454545",
    // "editorWidget.foreground": scheme.foreground,
    // "editorWidget.resizeBorder": null,

    errorForeground: scheme.ansi.red,

    // "extensionBadge.remoteBackground": scheme.ansi.blue,
    // "extensionBadge.remoteForeground": "#f8fafd",

    // "extensionButton.background": "#404754",
    // "extensionButton.foreground": scheme.foreground,
    // "extensionButton.hoverBackground": "#5c6478",
    // "extensionButton.prominentBackground": scheme.ansi.blue,
    // "extensionButton.prominentForeground": scheme.foreground,
    // "extensionButton.prominentHoverBackground": scheme.ansi.blue,
    // "extensionButton.separator": alpha(scheme.foreground, "66"),

    // "extensionIcon.preReleaseForeground": "#1d9271",
    // "extensionIcon.sponsorForeground": "#d758b3",
    // "extensionIcon.starForeground": "#ff8e00",
    // "extensionIcon.verifiedForeground": scheme.ansi.cyan,

    // focusBorder: alpha(scheme.foreground, "00"),

    foreground: scheme.foreground,

    // "gitDecoration.addedResourceForeground": scheme.ansi.green,
    // "gitDecoration.conflictingResourceForeground": scheme.ansi.red,
    // "gitDecoration.deletedResourceForeground": scheme.ansi.red,
    // "gitDecoration.ignoredResourceForeground": alpha(scheme.foreground, "60"),
    // "gitDecoration.modifiedResourceForeground": scheme.ansi.cyan,
    // "gitDecoration.renamedResourceForeground": "#73c991",
    // "gitDecoration.stageDeletedResourceForeground": "#c74e39",
    // "gitDecoration.stageModifiedResourceForeground": "#e2c08d",
    // "gitDecoration.submoduleResourceForeground": "#8db9e2",
    // "gitDecoration.untrackedResourceForeground": scheme.ansi.yellow,

    // "gitlens.closedAutolinkedIssueIconColor": "#a371f7",
    // "gitlens.closedPullRequestIconColor": "#f85149",
    // "gitlens.decorations.addedForegroundColor": scheme.ansi.green,
    // "gitlens.decorations.branchAheadForegroundColor": "#35b15e",
    // "gitlens.decorations.branchBehindForegroundColor": "#b15e35",
    // "gitlens.decorations.branchDivergedForegroundColor": "#d8af1b",
    // "gitlens.decorations.branchMissingUpstreamForegroundColor": "#c74e39",
    // "gitlens.decorations.branchUnpublishedForegroundColor": "#35b15e",
    // "gitlens.decorations.branchUpToDateForegroundColor": "#64727f",
    // "gitlens.decorations.copiedForegroundColor": "#73c991",
    // "gitlens.decorations.deletedForegroundColor": scheme.ansi.red,
    // "gitlens.decorations.ignoredForegroundColor": alpha(scheme.foreground, "60"),
    // "gitlens.decorations.modifiedForegroundColor": scheme.ansi.cyan,
    // "gitlens.decorations.renamedForegroundColor": "#73c991",
    // "gitlens.decorations.untrackedForegroundColor": scheme.ansi.yellow,
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
    // "gitlens.gutterBackgroundColor": alpha("#ffffff", "13"),
    // "gitlens.gutterForegroundColor": "#bebebe",
    // "gitlens.gutterUncommittedForegroundColor": alpha("#00bcf2", "99"),
    // "gitlens.lineHighlightBackgroundColor": alpha("#00bcf2", "33"),
    // "gitlens.lineHighlightOverviewRulerColor": alpha("#00bcf2", "99"),
    // "gitlens.mergedPullRequestIconColor": "#a371f7",
    // "gitlens.openAutolinkedIssueIconColor": "#3fb950",
    // "gitlens.openPullRequestIconColor": "#3fb950",
    // "gitlens.trailingLineBackgroundColor": alpha("#000000", "00"),
    // "gitlens.trailingLineForegroundColor": alpha("#999999", "59"),
    // "gitlens.unpublishedChangesIconColor": "#35b15e",
    // "gitlens.unpublishedCommitIconColor": "#35b15e",
    // "gitlens.unpulledChangesIconColor": "#b15e35",

    // "icon.foreground": "#c5c5c5",

    // "inlineChat.background": scheme.background,
    // "inlineChat.border": "#454545",
    // "inlineChat.regionHighlight": alpha("#264f78", "40"),
    // "inlineChat.shadow": "#282c35",

    // "inlineChatDiff.inserted": alpha(scheme.ansi.cyan, "40"),
    // "inlineChatDiff.removed": alpha(scheme.ansi.magenta, "40"),

    // "inlineChatInput.background": "#1d1f23",
    // "inlineChatInput.border": "#454545",
    // "inlineChatInput.focusBorder": alpha(scheme.foreground, "00"),
    // "inlineChatInput.placeholderForeground": scheme.foreground,

    // "input.background": "#1d1f23",
    // "input.border": alpha(scheme.foreground, "10"),
    // "input.foreground": scheme.foreground,
    // "input.placeholderForeground": scheme.foreground,

    // "inputOption.activeBackground": alpha(scheme.foreground, "00"),
    // "inputOption.activeBorder": scheme.ansi.blue,
    // "inputOption.activeForeground": "#ffffff",
    // "inputOption.hoverBackground": alpha("#5a5d5e", "80"),

    // "inputValidation.errorBackground": "#5a1d1d",
    // "inputValidation.errorBorder": scheme.ansi.red,
    // "inputValidation.errorForeground": null,
    // "inputValidation.infoBackground": "#063b49",
    // "inputValidation.infoBorder": scheme.ansi.blue,
    // "inputValidation.infoForeground": null,
    // "inputValidation.warningBackground": "#352a05",
    // "inputValidation.warningBorder": scheme.ansi.yellow,
    // "inputValidation.warningForeground": null,

    // "interactive.activeCodeBorder": "#181a1f",
    // "interactive.inactiveCodeBorder": "#2c313a",

    // "issues.closed": "#cb2431",
    // "issues.newIssueDecoration": alpha("#ffffff", "48"),
    // "issues.open": "#3fb950",

    // "keybindingLabel.background": alpha("#808080", "2b"),
    // "keybindingLabel.border": alpha("#333333", "99"),
    // "keybindingLabel.bottomBorder": alpha("#444444", "99"),
    // "keybindingLabel.foreground": "#cccccc",

    // "keybindingTable.headerBackground": alpha(scheme.foreground, "0a"),
    // "keybindingTable.rowsBackground": alpha(scheme.foreground, "0a"),

    // "list.activeSelectionBackground": "#2c313a",
    // "list.activeSelectionForeground": scheme.foreground,
    // "list.activeSelectionIconForeground": null,
    // "list.deemphasizedForeground": "#8c8c8c",
    // "list.dropBackground": "#062f4a",
    // "list.errorForeground": "#f88070",
    // "list.filterMatchBackground": "#314365",
    // "list.filterMatchBorder": null,
    // "list.focusAndSelectionOutline": null,
    // "list.focusBackground": "#383e4a",
    // "list.focusForeground": "#dfe1e8",
    // "list.focusHighlightForeground": "#c5c5c5",
    // "list.focusOutline": alpha(scheme.foreground, "00"),
    // "list.highlightForeground": "#c5c5c5",
    // "list.hoverBackground": "#292d35",
    // "list.hoverForeground": "#c0c5cd",
    // "list.inactiveFocusBackground": null,
    // "list.inactiveFocusOutline": null,
    // "list.inactiveSelectionBackground": "#2c313a",
    // "list.inactiveSelectionForeground": scheme.foreground,
    // "list.inactiveSelectionIconForeground": null,
    // "list.invalidItemForeground": "#b89500",
    // "list.warningForeground": "#cca700",

    // "listFilterWidget.background": scheme.background,
    // "listFilterWidget.noMatchesOutline": "#be1100",
    // "listFilterWidget.outline": alpha("#000000", "00"),
    // "listFilterWidget.shadow": "#282c35",

    // "markdown.extension.editor.codeSpan.background": alpha("#000000", "00"),
    // "markdown.extension.editor.codeSpan.border": alpha("#677696", "60"),
    // "markdown.extension.editor.formattingMark.foreground": "#3b4048",
    // "markdown.extension.editor.trailingSpace.background": alpha("#cccccc", "33"),

    // "menu.background": "#1d1f23",
    // "menu.border": null,
    // "menu.foreground": scheme.foreground,
    // "menu.selectionBackground": "#2c313a",
    // "menu.selectionBorder": null,
    // "menu.selectionForeground": scheme.foreground,
    // "menu.separatorBackground": "#606060",

    // "menubar.selectionBackground": alpha("#5a5d5e", "50"),
    // "menubar.selectionBorder": null,
    // "menubar.selectionForeground": "#9da5b4",

    // "merge.border": null,
    // "merge.commonContentBackground": alpha("#606060", "29"),
    // "merge.commonHeaderBackground": alpha("#606060", "66"),
    // "merge.currentContentBackground": alpha("#40c8ae", "33"),
    // "merge.currentHeaderBackground": alpha("#40c8ae", "80"),
    // "merge.incomingContentBackground": alpha("#40a6ff", "33"),
    // "merge.incomingHeaderBackground": alpha("#40a6ff", "80"),

    // "mergeEditor.change.background": alpha("#9bb955", "33"),
    // "mergeEditor.change.word.background": alpha("#9ccc2c", "33"),
    // "mergeEditor.changeBase.background": "#4b1818",
    // "mergeEditor.changeBase.word.background": "#6f1313",
    // "mergeEditor.conflict.handled.minimapOverViewRuler": alpha("#adaca8", "ee"),
    // "mergeEditor.conflict.handledFocused.border": alpha("#c1c1c1", "cc"),
    // "mergeEditor.conflict.handledUnfocused.border": alpha("#868686", "49"),
    // "mergeEditor.conflict.input1.background": alpha("#40c8ae", "33"),
    // "mergeEditor.conflict.input2.background": alpha("#40a6ff", "33"),
    // "mergeEditor.conflict.unhandled.minimapOverViewRuler": "#fcba03",
    // "mergeEditor.conflict.unhandledFocused.border": "#ffa600",
    // "mergeEditor.conflict.unhandledUnfocused.border": alpha("#ffa600", "7a"),
    // "mergeEditor.conflictingLines.background": alpha("#ffea00", "47"),

    // "minimap.background": null,
    // "minimap.errorHighlight": alpha("#ff1212", "b3"),
    // "minimap.findMatchHighlight": "#d18616",
    // "minimap.foregroundOpacity": "#000000",
    // "minimap.selectionHighlight": "#264f78",
    // "minimap.selectionOccurrenceHighlight": "#676767",
    // "minimap.warningHighlight": scheme.ansi.yellow,

    // "minimapGutter.addedBackground": scheme.ansi.green,
    // "minimapGutter.deletedBackground": scheme.ansi.magenta,
    // "minimapGutter.modifiedBackground": scheme.ansi.blue,
    // "minimapSlider.activeBackground": alpha("#747d91", "40"),
    // "minimapSlider.background": alpha("#4e5666", "40"),
    // "minimapSlider.hoverBackground": alpha("#5a6375", "40"),

    // "notebook.cellBorderColor": "#2c313a",
    // "notebook.cellEditorBackground": scheme.background,
    // "notebook.cellHoverBackground": null,
    // "notebook.cellInsertionIndicator": alpha(scheme.foreground, "00"),
    // "notebook.cellStatusBarItemHoverBackground": alpha("#ffffff", "26"),
    // "notebook.cellToolbarSeparator": alpha("#808080", "59"),
    // "notebook.editorBackground": scheme.ansi.black,
    // "notebook.focusedCellBackground": null,
    // "notebook.focusedCellBorder": alpha(scheme.foreground, "00"),
    // "notebook.focusedEditorBorder": alpha(scheme.foreground, "00"),
    // "notebook.inactiveFocusedCellBorder": "#2c313a",
    // "notebook.inactiveSelectedCellBorder": null,
    // "notebook.outputContainerBackgroundColor": null,
    // "notebook.outputContainerBorderColor": null,
    // "notebook.selectedCellBackground": "#2c313a",
    // "notebook.selectedCellBorder": "#2c313a",
    // "notebook.symbolHighlightBackground": alpha("#ffffff", "0b"),

    // "notebookEditorOverviewRuler.runningCellForeground": "#89d185",

    // "notebookScrollbarSlider.activeBackground": alpha("#747d91", "80"),
    // "notebookScrollbarSlider.background": alpha("#4e5666", "80"),
    // "notebookScrollbarSlider.hoverBackground": alpha("#5a6375", "80"),

    // "notebookStatusErrorIcon.foreground": scheme.ansi.red,
    // "notebookStatusRunningIcon.foreground": scheme.foreground,
    // "notebookStatusSuccessIcon.foreground": "#89d185",

    // "notificationCenter.border": null,

    // "notificationCenterHeader.background": "#2b3038",
    // "notificationCenterHeader.foreground": null,

    // "notificationLink.foreground": scheme.ansi.cyan,

    // "notifications.background": scheme.background,
    // "notifications.border": "#2b3038",
    // "notifications.foreground": scheme.foreground,

    // "notificationsErrorIcon.foreground": scheme.ansi.magenta,
    // "notificationsInfoIcon.foreground": "#3794ff",
    // "notificationsWarningIcon.foreground": scheme.ansi.yellow,

    // "notificationToast.border": null,

    // "panel.background": scheme.ansi.black,
    // "panel.border": scheme.ansi.brightBlack,
    // "panel.dropBorder": scheme.foreground,

    // "panelInput.border": alpha(scheme.foreground, "10"),

    // "panelSection.border": scheme.ansi.brightBlack,
    // "panelSection.dropBackground": alpha("#53595d", "80"),

    // "panelSectionHeader.background": alpha("#808080", "33"),
    // "panelSectionHeader.border": null,
    // "panelSectionHeader.foreground": null,

    // "panelTitle.activeBorder": scheme.foreground,
    // "panelTitle.activeForeground": scheme.foreground,
    // "panelTitle.inactiveForeground": scheme.foreground,

    // "peekView.border": "#181a1f",

    // "peekViewEditor.background": scheme.background,
    // "peekViewEditor.matchHighlightBackground": "#29244b",
    // "peekViewEditor.matchHighlightBorder": null,

    // "peekViewEditorGutter.background": scheme.background,
    // "peekViewEditorStickyScroll.background": scheme.background,

    // "peekViewResult.background": "#252526",
    // "peekViewResult.fileForeground": "#ffffff",
    // "peekViewResult.lineForeground": "#bbbbbb",
    // "peekViewResult.matchHighlightBackground": alpha("#ea5c00", "4d"),
    // "peekViewResult.selectionBackground": alpha("#3399ff", "33"),
    // "peekViewResult.selectionForeground": "#ffffff",

    // "peekViewTitle.background": "#252526",
    // "peekViewTitleDescription.foreground": alpha("#cccccc", "b3"),
    // "peekViewTitleLabel.foreground": "#ffffff",

    // "pickerGroup.border": "#3f3f46",
    // "pickerGroup.foreground": scheme.ansi.cyan,

    // "ports.iconRunningProcessForeground": scheme.ansi.blue,

    // "problemsErrorIcon.foreground": scheme.ansi.magenta,
    // "problemsInfoIcon.foreground": "#3794ff",
    // "problemsWarningIcon.foreground": scheme.ansi.yellow,

    // "profileBadge.background": "#4d4d4d",
    // "profileBadge.foreground": "#ffffff",

    // "progressBar.background": scheme.ansi.cyan,

    // "pullRequests.closed": "#cb2431",
    // "pullRequests.draft": "#6e7681",
    // "pullRequests.merged": "#8957e5",
    // "pullRequests.notification": "#3794ff",
    // "pullRequests.open": "#3fb950",

    // "quickInput.background": scheme.background,
    // "quickInput.foreground": scheme.foreground,

    // "quickInputList.focusBackground": "#2c313a",
    // "quickInputList.focusForeground": scheme.foreground,
    // "quickInputList.focusIconForeground": null,

    // "quickInputTitle.background": alpha("#ffffff", "1b"),

    // "sash.hoverBorder": alpha(scheme.foreground, "00"),

    // "scm.providerBorder": "#454545",

    // "scrollbar.shadow": "#282c35",

    // "scrollbarSlider.activeBackground": alpha("#747d91", "80"),
    // "scrollbarSlider.background": alpha("#4e5666", "80"),
    // "scrollbarSlider.hoverBackground": alpha("#5a6375", "80"),

    // "search.resultsInfoForeground": alpha(scheme.foreground, "a6"),

    // "searchEditor.findMatchBackground": alpha("#314365", "a8"),
    // "searchEditor.findMatchBorder": null,
    // "searchEditor.textInputBorder": alpha(scheme.foreground, "10"),

    "selection.background": scheme.foreground,

    // "settings.checkboxBackground": scheme.ansi.black,
    // "settings.checkboxBorder": scheme.ansi.cyan,
    // "settings.checkboxForeground": scheme.ansi.cyan,
    // "settings.dropdownBackground": "#1d1f23",
    // "settings.dropdownBorder": "#181a1f",
    // "settings.dropdownForeground": scheme.foreground,
    // "settings.dropdownListBorder": "#454545",
    // "settings.focusedRowBackground": alpha("#292d35", "99"),
    // "settings.focusedRowBorder": alpha(scheme.foreground, "00"),
    // "settings.headerBorder": scheme.ansi.brightBlack,
    // "settings.headerForeground": scheme.ansi.cyan,
    // "settings.modifiedItemIndicator": scheme.ansi.yellow,
    // "settings.numberInputBackground": "#1d1f23",
    // "settings.numberInputBorder": alpha(scheme.foreground, "10"),
    // "settings.numberInputForeground": scheme.foreground,
    // "settings.rowHoverBackground": alpha("#292d35", "4d"),
    // "settings.sashBorder": scheme.ansi.brightBlack,
    // "settings.settingsHeaderHoverForeground": alpha(scheme.ansi.cyan, "b3"),
    // "settings.textInputBackground": "#1d1f23",
    // "settings.textInputBorder": alpha(scheme.foreground, "10"),
    // "settings.textInputForeground": scheme.foreground,

    "sideBar.background": scheme.background,

    // "sideBar.border": "#232830",
    // "sideBar.dropBackground": alpha("#53595d", "80"),
    // "sideBar.foreground": "#64727f",

    // "sideBarSectionHeader.background": scheme.ansi.black,
    // "sideBarSectionHeader.border": null,
    // "sideBarSectionHeader.foreground": "#c0c5cd",

    // "sideBarTitle.foreground": scheme.foreground,

    // "sideBySideEditor.horizontalBorder": "#181a1f",
    // "sideBySideEditor.verticalBorder": "#181a1f",

    "statusBar.background": scheme.background,
    // "statusBar.border": scheme.ansi.brightBlack,
    // "statusBar.debuggingBackground": scheme.ansi.magenta,
    // "statusBar.debuggingBorder": scheme.ansi.magenta,
    // "statusBar.debuggingForeground": "#ffffff",
    // "statusBar.focusBorder": "#9da5b4",
    // "statusBar.foreground": "#9da5b4",
    // "statusBar.noFolderBackground": scheme.background,
    // "statusBar.noFolderBorder": scheme.ansi.brightBlack,
    // "statusBar.noFolderForeground": "#9da5b4",
    // "statusBar.offlineBackground": "#6c1717",
    // "statusBar.offlineForeground": "#f8fafd",

    // "statusBarItem.activeBackground": alpha("#ffffff", "2e"),
    // "statusBarItem.compactHoverBackground": alpha("#ffffff", "33"),
    // "statusBarItem.errorBackground": "#7b3239",
    // "statusBarItem.errorForeground": "#ffffff",
    // "statusBarItem.focusBorder": "#9da5b4",
    // "statusBarItem.hoverBackground": "#2c313a",
    // "statusBarItem.prominentBackground": alpha("#000000", "80"),
    // "statusBarItem.prominentForeground": "#9da5b4",
    // "statusBarItem.prominentHoverBackground": alpha("#000000", "4d"),
    // "statusBarItem.remoteBackground": scheme.ansi.blue,
    // "statusBarItem.remoteForeground": "#f8fafd",
    // "statusBarItem.warningBackground": "#d3a21b",
    // "statusBarItem.warningForeground": "#ffffff",

    // "symbolIcon.arrayForeground": scheme.foreground,
    // "symbolIcon.booleanForeground": scheme.foreground,
    // "symbolIcon.classForeground": "#ee9d28",
    // "symbolIcon.colorForeground": scheme.foreground,
    // "symbolIcon.constantForeground": scheme.foreground,
    // "symbolIcon.constructorForeground": "#b180d7",
    // "symbolIcon.enumeratorForeground": "#ee9d28",
    // "symbolIcon.enumeratorMemberForeground": "#75beff",
    // "symbolIcon.eventForeground": "#ee9d28",
    // "symbolIcon.fieldForeground": "#75beff",
    // "symbolIcon.fileForeground": scheme.foreground,
    // "symbolIcon.folderForeground": scheme.foreground,
    // "symbolIcon.functionForeground": "#b180d7",
    // "symbolIcon.interfaceForeground": "#75beff",
    // "symbolIcon.keyForeground": scheme.foreground,
    // "symbolIcon.keywordForeground": scheme.foreground,
    // "symbolIcon.methodForeground": "#b180d7",
    // "symbolIcon.moduleForeground": scheme.foreground,
    // "symbolIcon.namespaceForeground": scheme.foreground,
    // "symbolIcon.nullForeground": scheme.foreground,
    // "symbolIcon.numberForeground": scheme.foreground,
    // "symbolIcon.objectForeground": scheme.foreground,
    // "symbolIcon.operatorForeground": scheme.foreground,
    // "symbolIcon.packageForeground": scheme.foreground,
    // "symbolIcon.propertyForeground": scheme.foreground,
    // "symbolIcon.referenceForeground": scheme.foreground,
    // "symbolIcon.snippetForeground": scheme.foreground,
    // "symbolIcon.stringForeground": scheme.foreground,
    // "symbolIcon.structForeground": scheme.foreground,
    // "symbolIcon.textForeground": scheme.foreground,
    // "symbolIcon.typeParameterForeground": scheme.foreground,
    // "symbolIcon.unitForeground": scheme.foreground,
    // "symbolIcon.variableForeground": "#75beff",

    // "tab.activeBackground": "#2c313a",
    // "tab.activeBorder": alpha(scheme.ansi.blue, "60"),
    // "tab.activeBorderTop": null,
    // "tab.activeForeground": scheme.foreground,
    // "tab.activeModifiedBorder": "#3399cc",
    // "tab.border": scheme.ansi.brightBlack,
    // "tab.hoverBackground": alpha(scheme.ansi.blue, "30"),
    // "tab.hoverBorder": null,
    // "tab.hoverForeground": null,
    // "tab.inactiveBackground": scheme.background,
    // "tab.inactiveForeground": scheme.foreground,
    // "tab.inactiveModifiedBorder": alpha("#3399cc", "80"),
    // "tab.lastPinnedBorder": "#585858",
    // "tab.unfocusedActiveBackground": "#2c313a",
    // "tab.unfocusedActiveBorder": scheme.ansi.brightBlack,
    // "tab.unfocusedActiveBorderTop": null,
    // "tab.unfocusedActiveForeground": alpha(scheme.ansi.cyan, "30"),
    // "tab.unfocusedActiveModifiedBorder": alpha("#3399cc", "80"),
    // "tab.unfocusedHoverBackground": alpha(scheme.ansi.blue, "18"),
    // "tab.unfocusedHoverBorder": null,
    // "tab.unfocusedHoverForeground": null,
    // "tab.unfocusedInactiveBackground": scheme.background,
    // "tab.unfocusedInactiveForeground": alpha(scheme.foreground, "80"),
    // "tab.unfocusedInactiveModifiedBorder": alpha("#3399cc", "40"),

    "terminal.ansiBlack": scheme.ansi.black,
    "terminal.ansiBlue": scheme.ansi.blue,
    "terminal.ansiCyan": scheme.ansi.cyan,
    "terminal.ansiGreen": scheme.ansi.green,
    "terminal.ansiMagenta": scheme.ansi.magenta,
    "terminal.ansiRed": scheme.ansi.red,
    "terminal.ansiWhite": scheme.ansi.white,
    "terminal.ansiYellow": scheme.ansi.yellow,
    "terminal.ansiBrightBlack": scheme.ansi.brightBlack,
    "terminal.ansiBrightBlue": scheme.ansi.brightBlue,
    "terminal.ansiBrightCyan": scheme.ansi.brightCyan,
    "terminal.ansiBrightGreen": scheme.ansi.brightGreen,
    "terminal.ansiBrightMagenta": scheme.ansi.brightMagenta,
    "terminal.ansiBrightRed": scheme.ansi.brightRed,
    "terminal.ansiBrightWhite": scheme.ansi.brightWhite,
    "terminal.ansiBrightYellow": scheme.ansi.brightYellow,
    "terminal.background": scheme.background,
    // "terminal.border": scheme.ansi.brightBlack,
    // "terminal.dropBackground": alpha("#53595d", "80"),
    // "terminal.findMatchBackground": alpha(scheme.ansi.blue, "60"),
    // "terminal.findMatchBorder": null,
    // "terminal.findMatchHighlightBackground": "#314365",
    // "terminal.findMatchHighlightBorder": null,
    "terminal.foreground": scheme.foreground,
    // "terminal.hoverHighlightBackground": alpha("#264f78", "20"),
    // "terminal.inactiveSelectionBackground": alpha("#677696", "30"),
    // "terminal.selectionBackground": alpha("#677696", "60"),
    // "terminal.selectionForeground": null,
    // "terminal.tab.activeBorder": alpha(scheme.ansi.blue, "60"),

    // "terminalCommandDecoration.defaultBackground": alpha("#ffffff", "40"),
    // "terminalCommandDecoration.errorBackground": "#f14c4c",
    // "terminalCommandDecoration.successBackground": "#1b81a8",

    // "terminalCursor.background": null,
    // "terminalCursor.foreground": null,

    // "terminalOverviewRuler.cursorForeground": alpha("#a0a0a0", "cc"),
    // "terminalOverviewRuler.findMatchForeground": alpha("#d18616", "7e"),

    // "testing.iconErrored": "#f14c4c",
    // "testing.iconFailed": "#f14c4c",
    // "testing.iconPassed": "#73c991",
    // "testing.iconQueued": "#cca700",
    // "testing.iconSkipped": "#848484",
    // "testing.iconUnset": "#848484",
    // "testing.message.error.decorationForeground": scheme.ansi.magenta,
    // "testing.message.error.lineBackground": alpha("#ff0000", "33"),
    // "testing.message.info.decorationForeground": alpha(scheme.foreground, "80"),
    // "testing.message.info.lineBackground": null,
    // "testing.peekBorder": scheme.ansi.magenta,
    // "testing.peekHeaderBackground": alpha(scheme.ansi.magenta, "1a"),
    // "testing.runAction": "#73c991",

    // "textBlockQuote.background": alpha("#7f7f7f", "1a"),
    // "textBlockQuote.border": alpha("#007acc", "80"),

    // "textCodeBlock.background": alpha("#0a0a0a", "66"),

    // "textLink.activeForeground": scheme.foreground,
    // "textLink.foreground": scheme.ansi.cyan,

    // "textPreformat.foreground": "#d7ba7d",

    // "textSeparator.foreground": alpha("#ffffff", "2e"),

    "titleBar.activeBackground": scheme.ansi.black,
    "titleBar.activeForeground": scheme.ansi.cyan,
    "titleBar.border": alpha(scheme.ansi.brightBlack, "60"),
    // "titleBar.inactiveBackground": alpha(scheme.ansi.black, "80"),
    // "titleBar.inactiveForeground": "#6b717d",

    // "toolbar.activeBackground": alpha("#636667", "50"),
    // "toolbar.hoverBackground": alpha("#5a5d5e", "50"),
    // "toolbar.hoverOutline": null,

    // "tree.inactiveIndentGuidesStroke": alpha("#585858", "66"),
    // "tree.indentGuidesStroke": "#585858",
    // "tree.tableColumnsBorder": alpha("#cccccc", "20"),
    // "tree.tableOddRowsBackground": alpha(scheme.foreground, "0a"),

    // "walkThrough.embeddedEditorBackground": alpha("#000000", "66"),
    // "walkthrough.stepTitle.foreground": "#ffffff",

    // "welcomePage.background": null,
    // "welcomePage.progress.background": "#1d1f23",
    // "welcomePage.progress.foreground": scheme.ansi.cyan,
    // "welcomePage.tileBackground": scheme.background,
    // "welcomePage.tileBorder": alpha("#ffffff", "1a"),
    // "welcomePage.tileHoverBackground": scheme.ansi.black,

    // "widget.border": null,
    // "widget.shadow": "#282c35",

    // "window.activeBorder": null,
    // "window.inactiveBorder": null,
  },
  tokenColors: [
    {
      scope: "string",
      settings: {
        foreground: scheme.ansi.green,
      },
    },
    {
      scope: "constant.language",
      settings: {
        foreground: scheme.ansi.yellow,
      },
    },
    {
      scope: "constant.numeric",
      settings: {
        foreground: scheme.ansi.cyan,
      },
    },
    {
      scope: "constant.language",
      settings: {
        fontStyle: "italic",
      },
    },
    {
      scope: "constant.language.json, constant.language.import-export-all",
      settings: {
        foreground: scheme.ansi.green,
      },
    },
    {
      scope: "support.class",
      settings: {
        foreground: scheme.ansi.cyan,
      },
    },
    {
      scope: "support.variable, support.constant",
      settings: {
        foreground: scheme.foreground,
      },
    },
    {
      scope: "variable, meta.definition.variable entity.name.function",
      settings: {
        foreground: scheme.foreground,
      },
    },
    {
      scope: "variable.parameter",
      settings: {
        fontStyle: "italic",
      },
    },
    {
      scope: "variable.object.property, variable.other.object.property",
      settings: {
        foreground: scheme.ansi.green,
      },
    },
    {
      scope: "support.variable.property, variable.other.property",
      settings: {
        foreground: scheme.ansi.magenta,
      },
    },
    {
      scope: "variable.language.this",
      settings: {
        fontStyle: "italic",
      },
    },
    {
      scope: "modifier, support.type.object",
      settings: {
        foreground: scheme.ansi.green,
      },
    },
    {
      scope: "keyword",
      settings: {
        foreground: scheme.ansi.yellow,
      },
    },
    {
      scope:
        "keyword.control.loop, keyword.control.conditional, keyword.control.trycatch",
      settings: {
        foreground: scheme.ansi.yellow,
      },
    },
    {
      scope:
        "keyword.control.import, keyword.control.from, keyword.control.export, keyword.control.default",
      settings: {
        fontStyle: "italic",
      },
    },
    {
      scope: "keyword.control.flow",
      settings: {
        foreground: scheme.ansi.magenta,
        fontStyle: "italic",
      },
    },
    {
      scope: "entity.name.function, support.function",
      settings: {
        foreground: scheme.ansi.cyan,
      },
    },
    {
      scope: "storage.type, storage.modifier",
      settings: {
        foreground: scheme.ansi.green,
        fontStyle: "italic",
      },
    },
    {
      scope: "support.module, support.node",
      settings: {
        foreground: scheme.foreground,
        fontStyle: "italic",
      },
    },
    {
      scope: "support.type",
      settings: {
        foreground: scheme.ansi.magenta,
      },
    },
    {
      scope: "entity.name.type, entity.other.inherited-class",
      settings: {
        foreground: scheme.ansi.magenta,
      },
    },
    {
      scope: "comment",
      settings: {
        foreground: alpha(scheme.ansi.cyan, "70"),
        fontStyle: "italic",
      },
    },
    {
      scope: "entity.name.type.class",
      settings: {
        foreground: scheme.ansi.magenta,
      },
    },
    {
      scope: "meta.definition.method entity.name.function",
      settings: {
        foreground: scheme.ansi.cyan,
      },
    },
    {
      scope: "meta.function entity.name.function",
      settings: {
        foreground: scheme.ansi.cyan,
      },
    },
    {
      scope: "template.expression.begin, template.expression.end",
      settings: {
        foreground: scheme.ansi.green,
      },
    },
    {
      scope: "entity.name.tag.yaml",
      settings: {
        foreground: scheme.ansi.magenta,
      },
    },
    {
      scope:
        "meta.object-literal.key, meta.object-literal.key string, support.type.property-name.json",
      settings: {
        foreground: scheme.ansi.cyan,
        fontStyle: "italic",
      },
    },
    {
      scope: "entity.other.attribute-name.class",
      settings: {
        foreground: scheme.ansi.green,
      },
    },
    {
      scope: "entity.other.attribute-name.id",
      settings: {
        foreground: scheme.ansi.cyan,
      },
    },
    {
      scope: "source.css",
      settings: {
        foreground: scheme.ansi.yellow,
      },
    },
    {
      scope: "meta.tag, punctuation.definition.tag",
      settings: {
        foreground: scheme.ansi.green,
      },
    },
    {
      scope: "entity.name.tag",
      settings: {
        foreground: scheme.ansi.cyan,
      },
    },
    {
      scope: "entity.other.attribute-name",
      settings: {
        foreground: scheme.ansi.yellow,
      },
    },
    {
      scope: "markup.heading",
      settings: {
        foreground: scheme.ansi.green,
      },
    },
    {
      scope: "text.html.markdown meta.link.inline, meta.link.reference",
      settings: {
        foreground: scheme.foreground,
      },
    },
    {
      scope: "text.html.markdown beginning.punctuation.definition.list",
      settings: {
        foreground: scheme.ansi.green,
      },
    },
    {
      scope: "markup.italic",
      settings: {
        foreground: scheme.foreground,
      },
    },
    {
      scope: "markup.bold",
      settings: {
        foreground: scheme.foreground,
        fontStyle: "bold",
      },
    },
    {
      scope: "markup.bold markup.italic, markup.italic markup.bold",
      settings: {
        foreground: scheme.foreground,
      },
    },
    {
      scope: "keyword.other.definition.ini",
      settings: {
        foreground: scheme.foreground,
      },
    },
    {
      scope: "entity.name.section.group-title.ini",
      settings: {
        foreground: scheme.ansi.green,
      },
    },
    {
      scope: "punctuation.definition.tag",
      settings: {
        foreground: scheme.ansi.cyan,
      },
    },
    {
      scope:
        "storage.modifier.ts, entity.name.type.module.ts, support.type.primitive.ts",
      settings: {
        foreground: scheme.ansi.cyan,
      },
    },
    {
      scope: "entity.name.type.instance.jsdoc",
      settings: {
        foreground: scheme.ansi.cyan,
      },
    },
    {
      scope: "punctuation.separator.parameter",
      settings: {
        foreground: alpha(scheme.ansi.cyan, "70"),
      },
    },
    {
      scope:
        "meta.brace, punctuation.definition.parameters, punctuation.definition.block, punctuation.terminator.statement, punctuation.separator.comma, punctuation.section.embedded",
      settings: {
        foreground: alpha(scheme.ansi.cyan, "70"),
      },
    },
    {
      scope: "token.info-token",
      settings: {
        foreground: "#6796e6",
      },
    },
    {
      scope: "token.warn-token",
      settings: {
        foreground: "#cd9731",
      },
    },
    {
      scope: "token.error-token",
      settings: {
        foreground: "#f44747",
      },
    },
    {
      scope: "token.debug-token",
      settings: {
        foreground: "#b267e6",
      },
    },
  ],
});
