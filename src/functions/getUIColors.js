const chroma = require("chroma-js");
const { alpha } = require("./utils");

/*
TODO:

- [ ] **complete first pass on:**
  - [x] info/warning/error/success statuses
  - [x] DIFF styling
  - [ ] gitlens
  - [x] git-decorations
  - [x] selection
  - [ ] highlight
  - [x] focus borders
  - [x] inputs / settings
  - [ ] searching / filtering
  - [x] boxes, widgets, menus
  - [x] toolbar
  - [ ] progress bars
- [ ] **complete second pass on:**
  - [x] activity bar
  - [x] status bar
  - [x] sidebar / explorer
  - [x] tabs
  - [x] buttons
*/

module.exports = ({
  ansi,
  foreground,
  darkForeground,
  background,
  // bold,
  // links,
  cursorText,
  selection: selectionBackground,
  selectedText: selectionForeground,
}) => {
  const none = "#00000000";

  // diffs:
  const added = ansi.green; // syn. "inserted"
  const removed = ansi.red; // syn. "deleted"
  const modified = ansi.cyan;
  const ignored = alpha(foreground, "66");
  const untracked = ansi.yellow;

  // statuses:
  const info = ansi.blue;
  const warning = ansi.yellow;
  const error = ansi.red;
  // const success = ansi.green;

  // boxes:
  const boxBackground = alpha(ansi.black, "80");
  const boxHoverBackground = alpha(ansi.black, "99");
  const boxForeground = ansi.brightBlack;
  const boxBorder = alpha(ansi.brightWhite, "33");

  // widgets:
  const widgetBackground = ansi.darkBlack;
  const widgetBorder = none; // chroma(ansi.brightBlack).alpha(0.5).hex();
  const widgetForeground = foreground;
  const widgetHighlightForeground = ansi.brightWhite;
  const widgetStatusBarBackground = background;
  const widgetShadow = "#00000066";

  return {
    "activityBar.activeBackground": ansi.green,
    // "activityBar.activeBorder": ansi.brightWhite,
    // "activityBar.activeFocusBorder": null,
    "activityBar.background": background, // alpha(ansi.blue, "11"),
    // "activityBar.border": ansi.brightBlack,
    // "activityBar.dropBorder": foreground,
    "activityBar.foreground": ansi.brightCyan,
    "activityBar.inactiveForeground": alpha(ansi.brightCyan, "66"),

    "activityBarBadge.background": ansi.green,
    "activityBarBadge.foreground": ansi.brightWhite,

    "badge.background": ansi.red,
    "badge.foreground": ansi.brightWhite,

    // "banner.background": "#2c313a",
    // "banner.foreground": foreground,
    // "banner.iconForeground": info,

    // "breadcrumb.activeSelectionForeground": "#828aa0",
    // "breadcrumb.background": ansi.black,
    // "breadcrumb.focusForeground": "#828aa0",
    // "breadcrumb.foreground": alpha(foreground, "cc"),

    // "breadcrumbPicker.background": background,

    "button.background": darkForeground,
    "button.border": none,
    "button.foreground": ansi.brightWhite,
    // "button.hoverBackground": ansi.white,
    "button.secondaryBackground": ansi.blue,
    "button.secondaryForeground": ansi.white,
    // "button.secondaryHoverBackground": ansi.brightBlue,
    "button.separator": alpha(foreground, "66"),

    "charts.blue": ansi.blue,
    "charts.foreground": foreground,
    "charts.green": ansi.green,
    "charts.lines": alpha(foreground, "80"),
    "charts.orange": ansi.yellow,
    "charts.purple": ansi.magenta,
    "charts.red": ansi.red,
    "charts.yellow": ansi.brightYellow,

    // "chat.requestBackground": alpha(ansi.brightWhite, "08"),
    // "chat.requestBorder": alpha(ansi.brightWhite, "1a"),

    // TODO:
    // "checkbox.background": "#1d1f23",
    // "checkbox.border": "#181a1f",
    // "checkbox.foreground": foreground,
    // "checkbox.selectBackground": background,
    // "checkbox.selectBorder": "#c5c5c5",

    // "commandCenter.activeBackground": alpha(ansi.brightWhite, "14"),
    // "commandCenter.activeBorder": alpha("#9da5b4", "4d"),
    // "commandCenter.activeForeground": "#9da5b4",
    // "commandCenter.background": alpha(ansi.brightWhite, "0d"),
    // "commandCenter.border": alpha("#9da5b4", "33"),
    // "commandCenter.foreground": "#9da5b4",
    // "commandCenter.inactiveBorder": alpha("#6b717d", "40"),
    // "commandCenter.inactiveForeground": "#6b717d",

    // "commentsView.resolvedIcon": alpha("#cccccc", "80"),
    // "commentsView.unresolvedIcon": alpha(foreground, "00"),

    // contrastActiveBorder: null,
    // "contrastBorder": null,

    // "debugConsole.errorForeground": error,
    // "debugConsole.infoForeground": info,
    // "debugConsole.sourceForeground": foreground,
    // "debugConsole.warningForeground": warning,

    // "debugConsoleInputIcon.foreground": foreground,

    // "debugExceptionWidget.background": "#420b0d",
    // "debugExceptionWidget.border": "#a31515",

    // "debugIcon.breakpointCurrentStackframeForeground": "#ffcc00",
    // "debugIcon.breakpointDisabledForeground": disabled,
    // "debugIcon.breakpointForeground": "#e51400",
    // "debugIcon.breakpointStackframeForeground": "#89d185",
    // "debugIcon.breakpointUnverifiedForeground": disabled,
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

    // "debugToolBar.background": background,
    // "debugToolBar.border": null,

    // "debugView.exceptionLabelBackground": "#6c2022",
    // "debugView.exceptionLabelForeground": foreground,
    // "debugView.stateLabelBackground": alpha("#888888", "44"),
    // "debugView.stateLabelForeground": foreground,
    // "debugView.valueChangedHighlight": "#569cd6",

    // descriptionForeground: foreground,

    "diffEditor.border": none,
    "diffEditor.diagonalFill": alpha(ansi.black, "80"),
    "diffEditor.insertedLineBackground": alpha(added, "33"),
    "diffEditor.insertedTextBackground": alpha(added, "80"),
    "diffEditor.insertedTextBorder": none,
    // "diffEditor.move.border": alpha("#8b8b8b", "9c"),
    "diffEditor.removedLineBackground": alpha(removed, "33"),
    "diffEditor.removedTextBackground": alpha(removed, "80"),
    "diffEditor.removedTextBorder": none,
    // "diffEditor.unchangedCodeBackground": alpha("#747474", "29"),
    // "diffEditor.unchangedRegionBackground": "#3e3e3e",
    // "diffEditor.unchangedRegionForeground": "#a3a2a2",
    // "diffEditorGutter.insertedLineBackground": null,
    // "diffEditorGutter.removedLineBackground": null,
    // "diffEditorOverview.insertedForeground": null,
    // "diffEditorOverview.removedForeground": null,

    disabledForeground: alpha(foreground, "80"),

    // TODO:
    // "dropdown.background": "#1d1f23",
    // "dropdown.border": "#181a1f",
    // "dropdown.foreground": foreground,
    // "dropdown.listBackground": null,

    "editor.background": background,
    "editor.foreground": foreground,

    // TODO:
    // "editor.findMatchBackground": alpha(ansi.blue, "60"),
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
    // "editor.inlineValuesForeground": alpha(ansi.brightWhite, "80"),
    "editor.lineHighlightBackground": alpha(ansi.black, "33"),
    "editor.lineHighlightBorder": none,
    // "editor.linkedEditingBackground": alpha("#ff0000", "4d"),
    // "editor.rangeHighlightBackground": alpha(ansi.blue, "30"),
    // "editor.rangeHighlightBorder": null,
    "editor.selectionBackground": selectionBackground,
    "editor.selectionForeground": selectionForeground,
    // "editor.selectionHighlightBackground": alpha(ansi.brightWhite, "10"),
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
    // "editor.wordHighlightStrongBackground": alpha(ansi.blue, "26"),
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

    // "editorBracketMatch.background": alpha(ansi.blue, "30"),
    // "editorBracketMatch.border": alpha(ansi.blue, "30"),

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

    // "editorCommentsWidget.rangeActiveBackground": alpha(foreground, "00"),
    // "editorCommentsWidget.rangeActiveBorder": alpha(foreground, "00"),
    // "editorCommentsWidget.rangeBackground": alpha(foreground, "00"),
    // "editorCommentsWidget.rangeBorder": alpha(foreground, "00"),
    // "editorCommentsWidget.resolvedBorder": alpha("#cccccc", "80"),
    // "editorCommentsWidget.unresolvedBorder": alpha(foreground, "00"),

    // "editorCursor.background": null,
    "editorCursor.foreground": cursorText,

    // "editorError.background": null,
    // "editorError.border": null,
    "editorError.foreground": ansi.magenta,

    // "editorGhostText.background": null,
    // "editorGhostText.border": null,
    // "editorGhostText.foreground": alpha(ansi.brightWhite, "56"),

    "editorGroup.border": alpha(ansi.black, "33"),
    "editorGroup.dropBackground": alpha(ansi.black, "33"),
    "editorGroup.dropIntoPromptBackground": boxBackground,
    "editorGroup.dropIntoPromptBorder": none,
    "editorGroup.dropIntoPromptForeground": boxForeground,
    // "editorGroup.emptyBackground": null,
    // "editorGroup.focusedEmptyBorder": null,

    // "editorGroupHeader.border": null,
    // "editorGroupHeader.noTabsBackground": ansi.black,
    "editorGroupHeader.tabsBackground": background,
    // "editorGroupHeader.tabsBorder": "#282c35",

    "editorGutter.addedBackground": added,
    // "editorGutter.background": "#282c35",
    // "editorGutter.commentGlyphForeground": foreground,
    // "editorGutter.commentRangeForeground": "#2c313a",
    // "editorGutter.commentUnresolvedGlyphForeground": foreground,
    "editorGutter.deletedBackground": removed,
    // "editorGutter.foldingControlForeground": "#c5c5c5",
    // "editorGutter.modifiedBackground": ansi.blue,

    // "editorHint.border": null,
    // "editorHint.foreground": alpha("#eeeeee", "b3"),

    "editorHoverWidget.background": widgetBackground,
    "editorHoverWidget.border": widgetBorder,
    "editorHoverWidget.foreground": widgetForeground,
    "editorHoverWidget.highlightForeground": widgetHighlightForeground,
    "editorHoverWidget.statusBarBackground": widgetStatusBarBackground,

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
    "editorInfo.foreground": info,

    // "editorInlayHint.background": alpha(ansi.black, "40"),
    // "editorInlayHint.foreground": foreground,
    // "editorInlayHint.parameterBackground": alpha(ansi.black, "40"),
    // "editorInlayHint.parameterForeground": foreground,
    // "editorInlayHint.typeBackground": alpha(ansi.black, "40"),
    // "editorInlayHint.typeForeground": foreground,

    // "editorLightBulb.foreground": "#ffcc00",
    // "editorLightBulbAutoFix.foreground": "#75beff",

    "editorLineNumber.activeForeground": ansi.brightBlack,
    // "editorLineNumber.dimmedForeground": null,
    "editorLineNumber.foreground": ansi.black,

    // "editorLink.activeForeground": foreground,

    // "editorMarkerNavigation.background": background,
    // "editorMarkerNavigationError.background": error,
    // "editorMarkerNavigationError.headerBackground": alpha(error, "1a"),
    // "editorMarkerNavigationInfo.background": info,
    // "editorMarkerNavigationInfo.headerBackground": alpha(info, "1a"),
    // "editorMarkerNavigationWarning.background": warning,
    // "editorMarkerNavigationWarning.headerBackground": alpha(warning, "1a"),

    "editorOverviewRuler.addedForeground": added,
    // "editorOverviewRuler.background": null,
    // "editorOverviewRuler.border": ansi.brightBlack,
    // "editorOverviewRuler.bracketMatchForeground": "#a0a0a0",
    // "editorOverviewRuler.commentForeground": "#2c313a",
    // "editorOverviewRuler.commentUnresolvedForeground": "#2c313a",
    // "editorOverviewRuler.commonContentForeground": alpha("#606060", "66"),
    // "editorOverviewRuler.currentContentForeground": alpha("#40c8ae", "80"),
    "editorOverviewRuler.deletedForeground": removed,
    "editorOverviewRuler.errorForeground": error,
    // "editorOverviewRuler.findMatchForeground": alpha("#d18616", "7e"),
    // "editorOverviewRuler.incomingContentForeground": alpha(added, "80"),
    "editorOverviewRuler.infoForeground": info,
    // "editorOverviewRuler.modifiedForeground": alpha(modified, "99"),
    // "editorOverviewRuler.rangeHighlightForeground": alpha("#007acc", "99"),
    // "editorOverviewRuler.selectionHighlightForeground": alpha("#a0a0a0", "cc"),
    "editorOverviewRuler.warningForeground": warning,
    // "editorOverviewRuler.wordHighlightForeground": alpha("#a0a0a0", "cc"),
    // "editorOverviewRuler.wordHighlightStrongForeground": alpha("#c0a0c0", "cc"),
    // "editorOverviewRuler.wordHighlightTextForeground": alpha("#a0a0a0", "cc"),

    // "editorPane.background": ansi.black,

    "editorRuler.foreground": alpha(ansi.cyan, "33"),

    // "editorStickyScroll.background": ansi.black,
    // "editorStickyScrollHover.background": "#2a2d2e",

    // "editorSuggestWidget.background": background,
    // "editorSuggestWidget.border": "#181a1f",
    // "editorSuggestWidget.focusHighlightForeground": "#c5c5c5",
    // "editorSuggestWidget.foreground": foreground,
    // "editorSuggestWidget.highlightForeground": ansi.brightCyan,
    // "editorSuggestWidget.selectedBackground": "#2c313a",
    // "editorSuggestWidget.selectedForeground": foreground,
    // "editorSuggestWidget.selectedIconForeground": null,

    // "editorSuggestWidgetStatus.foreground": alpha(foreground, "80"),

    // "editorUnicodeHighlight.background": alpha("#bd9b03", "26"),
    // "editorUnicodeHighlight.border": "#bd9b03",

    // "editorUnnecessaryCode.border": null,
    // "editorUnnecessaryCode.opacity": alpha("#000000", "aa"),

    // "editorWarning.background": null,
    // "editorWarning.border": null,
    "editorWarning.foreground": warning,

    // "editorWhitespace.foreground": "#3b4048",

    "editorWidget.background": widgetBackground,
    "editorWidget.border": widgetBorder,
    "editorWidget.foreground": widgetForeground,
    // "editorWidget.resizeBorder": null,

    errorForeground: ansi.red,

    // "extensionBadge.remoteBackground": ansi.blue,
    // "extensionBadge.remoteForeground": "#f8fafd",

    // "extensionButton.background": "#404754",
    // "extensionButton.foreground": foreground,
    // "extensionButton.hoverBackground": "#5c6478",
    // "extensionButton.prominentBackground": ansi.blue,
    // "extensionButton.prominentForeground": foreground,
    // "extensionButton.prominentHoverBackground": ansi.blue,
    // "extensionButton.separator": alpha(foreground, "66"),

    // "extensionIcon.preReleaseForeground": "#1d9271",
    // "extensionIcon.sponsorForeground": "#d758b3",
    // "extensionIcon.starForeground": "#ff8e00",
    // "extensionIcon.verifiedForeground": ansi.cyan,

    focusBorder: alpha(ansi.cyan, "99"),

    foreground,

    "gitDecoration.addedResourceForeground": added,
    "gitDecoration.conflictingResourceForeground": error,
    "gitDecoration.deletedResourceForeground": removed,
    "gitDecoration.ignoredResourceForeground": ignored,
    "gitDecoration.modifiedResourceForeground": modified,
    // "gitDecoration.renamedResourceForeground": "#73c991",
    "gitDecoration.stageDeletedResourceForeground": alpha(removed, "cc"),
    "gitDecoration.stageModifiedResourceForeground": alpha(modified, "cc"),
    // "gitDecoration.submoduleResourceForeground": "#8db9e2",
    "gitDecoration.untrackedResourceForeground": untracked,

    // "gitlens.closedAutolinkedIssueIconColor": "#a371f7",
    // "gitlens.closedPullRequestIconColor": "#f85149",
    "gitlens.decorations.addedForegroundColor": added,
    // "gitlens.decorations.branchAheadForegroundColor": "#35b15e",
    // "gitlens.decorations.branchBehindForegroundColor": "#b15e35",
    // "gitlens.decorations.branchDivergedForegroundColor": "#d8af1b",
    // "gitlens.decorations.branchMissingUpstreamForegroundColor": "#c74e39",
    // "gitlens.decorations.branchUnpublishedForegroundColor": "#35b15e",
    // "gitlens.decorations.branchUpToDateForegroundColor": "#64727f",
    "gitlens.decorations.copiedForegroundColor": added,
    "gitlens.decorations.deletedForegroundColor": removed,
    "gitlens.decorations.ignoredForegroundColor": alpha(foreground, "60"),
    "gitlens.decorations.modifiedForegroundColor": modified,
    // "gitlens.decorations.renamedForegroundColor": "#73c991",
    "gitlens.decorations.untrackedForegroundColor": untracked,
    // "gitlens.decorations.workspaceCurrentForegroundColor": "#35b15e",
    // "gitlens.decorations.workspaceRepoMissingForegroundColor": "#909090",
    // "gitlens.decorations.workspaceRepoOpenForegroundColor": "#35b15e",
    // "gitlens.decorations.worktreeHasUncommittedChangesForegroundColor": "#e2c08d",
    // "gitlens.decorations.worktreeMissingForegroundColor": "#c74e39",
    // "gitlens.graphChangesColumnAddedColor": "#347d39",
    // "gitlens.graphChangesColumnDeletedColor": "#c93c37",
    // "gitlens.graphLane1Color": "#15a0bf",
    // "gitlens.graphLane2Color": "#0669f7",
    // "gitlens.graphLane3Color": "#8e00c2",
    // "gitlens.graphLane4Color": "#c517b6",
    // "gitlens.graphLane5Color": "#d90171",
    // "gitlens.graphLane6Color": "#cd0101",
    // "gitlens.graphLane7Color": "#f25d2e",
    // "gitlens.graphLane8Color": "#f2ca33",
    // "gitlens.graphLane9Color": "#7bd938",
    // "gitlens.graphLane10Color": "#2ece9d",
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
    // "gitlens.gutterBackgroundColor": alpha(ansi.brightWhite, "13"),
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

    // "inlineChat.background": background,
    // "inlineChat.border": "#454545",
    // "inlineChat.regionHighlight": alpha("#264f78", "40"),
    // "inlineChat.shadow": "#282c35",

    "inlineChatDiff.inserted": alpha(added, "40"),
    "inlineChatDiff.removed": alpha(removed, "40"),

    // "inlineChatInput.background": "#1d1f23",
    // "inlineChatInput.border": "#454545",
    // "inlineChatInput.focusBorder": alpha(foreground, "00"),
    // "inlineChatInput.placeholderForeground": foreground,

    // TODO:
    // "input.background": "#1d1f23",
    // "input.border": alpha(foreground, "10"),
    // "input.foreground": foreground,
    // "input.placeholderForeground": foreground,

    // "inputOption.activeBackground": alpha(foreground, "00"),
    // "inputOption.activeBorder": ansi.blue,
    // "inputOption.activeForeground": ansi.brightWhite,
    // "inputOption.hoverBackground": alpha("#5a5d5e", "80"),

    // "inputValidation.errorBackground": alpha(error, "33"),
    // "inputValidation.errorBorder": error,
    // "inputValidation.errorForeground": null,
    // "inputValidation.infoBackground": alpha(info, "33"),
    // "inputValidation.infoBorder": info,
    // "inputValidation.infoForeground": null,
    // "inputValidation.warningBackground": alpha(warning, "33"),
    // "inputValidation.warningBorder": warning,
    // "inputValidation.warningForeground": null,

    // "interactive.activeCodeBorder": "#181a1f",
    // "interactive.inactiveCodeBorder": "#2c313a",

    // "issues.closed": "#cb2431",
    // "issues.newIssueDecoration": alpha(ansi.brightWhite, "48"),
    // "issues.open": "#3fb950",

    // "keybindingLabel.background": alpha("#808080", "2b"),
    // "keybindingLabel.border": alpha("#333333", "99"),
    // "keybindingLabel.bottomBorder": alpha("#444444", "99"),
    // "keybindingLabel.foreground": "#cccccc",

    // "keybindingTable.headerBackground": alpha(foreground, "0a"),
    // "keybindingTable.rowsBackground": alpha(foreground, "0a"),

    // TODO: sidebar / explorer lists:
    "list.activeSelectionBackground": ansi.black,
    "list.activeSelectionForeground": ansi.brightWhite,
    "list.activeSelectionIconForeground": none,
    // "list.deemphasizedForeground": "#8c8c8c",
    // "list.dropBackground": "#062f4a",
    "list.errorForeground": error,
    // "list.filterMatchBackground": "#314365",
    // "list.filterMatchBorder": null,
    // "list.focusAndSelectionOutline": null,
    "list.focusBackground": alpha(ansi.black, "99"),
    "list.focusForeground": foreground,
    // "list.focusHighlightForeground": "#c5c5c5",
    "list.focusOutline": none,
    // "list.highlightForeground": "#c5c5c5",
    "list.hoverBackground": alpha(ansi.black, "66"),
    "list.hoverForeground": ansi.white,
    "list.inactiveFocusBackground": alpha(ansi.black, "66"),
    "list.inactiveFocusOutline": none,
    "list.inactiveSelectionBackground": alpha(ansi.black, "99"),
    "list.inactiveSelectionForeground": foreground,
    "list.inactiveSelectionIconForeground": none,
    "list.invalidItemForeground": error,
    "list.warningForeground": warning,

    // "listFilterWidget.background": background,
    // "listFilterWidget.noMatchesOutline": "#be1100",
    // "listFilterWidget.outline": alpha("#000000", "00"),
    // "listFilterWidget.shadow": "#282c35",

    // "markdown.extension.editor.codeSpan.background": alpha("#000000", "00"),
    // "markdown.extension.editor.codeSpan.border": alpha("#677696", "60"),
    // "markdown.extension.editor.formattingMark.foreground": "#3b4048",
    // "markdown.extension.editor.trailingSpace.background": alpha("#cccccc", "33"),

    // TODO:
    // "menu.background": "#1d1f23",
    // "menu.border": null,
    // "menu.foreground": foreground,
    // "menu.selectionBackground": "#2c313a",
    // "menu.selectionBorder": null,
    // "menu.selectionForeground": foreground,
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
    // "minimap.warningHighlight": warning,

    // "minimapGutter.addedBackground": added,
    // "minimapGutter.deletedBackground": ansi.magenta,
    // "minimapGutter.modifiedBackground": ansi.blue,
    // "minimapSlider.activeBackground": alpha("#747d91", "40"),
    // "minimapSlider.background": alpha("#4e5666", "40"),
    // "minimapSlider.hoverBackground": alpha("#5a6375", "40"),

    // "notebook.cellBorderColor": "#2c313a",
    // "notebook.cellEditorBackground": background,
    // "notebook.cellHoverBackground": null,
    // "notebook.cellInsertionIndicator": alpha(foreground, "00"),
    // "notebook.cellStatusBarItemHoverBackground": alpha(ansi.brightWhite, "26"),
    // "notebook.cellToolbarSeparator": alpha("#808080", "59"),
    // "notebook.editorBackground": ansi.black,
    // "notebook.focusedCellBackground": null,
    // "notebook.focusedCellBorder": alpha(foreground, "00"),
    // "notebook.focusedEditorBorder": alpha(foreground, "00"),
    // "notebook.inactiveFocusedCellBorder": "#2c313a",
    // "notebook.inactiveSelectedCellBorder": null,
    // "notebook.outputContainerBackgroundColor": null,
    // "notebook.outputContainerBorderColor": null,
    // "notebook.selectedCellBackground": "#2c313a",
    // "notebook.selectedCellBorder": "#2c313a",
    // "notebook.symbolHighlightBackground": alpha(ansi.brightWhite, "0b"),

    // "notebookEditorOverviewRuler.runningCellForeground": "#89d185",

    // "notebookScrollbarSlider.activeBackground": alpha("#747d91", "80"),
    // "notebookScrollbarSlider.background": alpha("#4e5666", "80"),
    // "notebookScrollbarSlider.hoverBackground": alpha("#5a6375", "80"),

    // "notebookStatusErrorIcon.foreground": ansi.red,
    // "notebookStatusRunningIcon.foreground": foreground,
    // "notebookStatusSuccessIcon.foreground": "#89d185",

    // "notificationCenter.border": null,

    // "notificationCenterHeader.background": "#2b3038",
    // "notificationCenterHeader.foreground": null,

    // "notificationLink.foreground": ansi.cyan,

    // "notifications.background": background,
    // "notifications.border": "#2b3038",
    // "notifications.foreground": foreground,

    // "notificationsErrorIcon.foreground": error,
    // "notificationsInfoIcon.foreground": info,
    // "notificationsWarningIcon.foreground": warning,

    // "notificationToast.border": null,

    // "panel.background": ansi.black,
    // "panel.border": ansi.brightBlack,
    // "panel.dropBorder": foreground,

    // "panelInput.border": alpha(foreground, "10"),

    // "panelSection.border": ansi.brightBlack,
    // "panelSection.dropBackground": alpha("#53595d", "80"),

    // "panelSectionHeader.background": alpha("#808080", "33"),
    // "panelSectionHeader.border": null,
    // "panelSectionHeader.foreground": null,

    // "panelTitle.activeBorder": foreground,
    // "panelTitle.activeForeground": foreground,
    // "panelTitle.inactiveForeground": foreground,

    // "peekView.border": "#181a1f",

    // "peekViewEditor.background": background,
    // "peekViewEditor.matchHighlightBackground": "#29244b",
    // "peekViewEditor.matchHighlightBorder": null,

    // "peekViewEditorGutter.background": background,
    // "peekViewEditorStickyScroll.background": background,

    // "peekViewResult.background": "#252526",
    // "peekViewResult.fileForeground": ansi.brightWhite,
    // "peekViewResult.lineForeground": "#bbbbbb",
    // "peekViewResult.matchHighlightBackground": alpha("#ea5c00", "4d"),
    // "peekViewResult.selectionBackground": alpha("#3399ff", "33"),
    // "peekViewResult.selectionForeground": ansi.brightWhite,

    // "peekViewTitle.background": "#252526",
    // "peekViewTitleDescription.foreground": alpha("#cccccc", "b3"),
    // "peekViewTitleLabel.foreground": ansi.brightWhite,

    // "pickerGroup.border": "#3f3f46",
    // "pickerGroup.foreground": ansi.cyan,

    // "ports.iconRunningProcessForeground": ansi.blue,

    "problemsErrorIcon.foreground": error,
    "problemsInfoIcon.foreground": info,
    "problemsWarningIcon.foreground": warning,

    // "profileBadge.background": "#4d4d4d",
    // "profileBadge.foreground": ansi.brightWhite,

    // "progressBar.background": ansi.cyan,

    // "pullRequests.closed": "#cb2431",
    // "pullRequests.draft": "#6e7681",
    // "pullRequests.merged": "#8957e5",
    // "pullRequests.notification": info,
    // "pullRequests.open": "#3fb950",

    // "quickInput.background": background,
    // "quickInput.foreground": foreground,

    // "quickInputList.focusBackground": "#2c313a",
    // "quickInputList.focusForeground": foreground,
    // "quickInputList.focusIconForeground": null,

    // "quickInputTitle.background": alpha(ansi.brightWhite, "1b"),

    // "sash.hoverBorder": alpha(foreground, "00"),

    // "scm.providerBorder": "#454545",

    // "scrollbar.shadow": "#282c35",

    // "scrollbarSlider.activeBackground": alpha("#747d91", "80"),
    // "scrollbarSlider.background": alpha("#4e5666", "80"),
    // "scrollbarSlider.hoverBackground": alpha("#5a6375", "80"),

    // "search.resultsInfoForeground": alpha(info, "a6"),

    // "searchEditor.findMatchBackground": alpha("#314365", "a8"),
    // "searchEditor.findMatchBorder": null,
    // "searchEditor.textInputBorder": alpha(foreground, "10"),

    "selection.background": selectionBackground,

    // "settings.checkboxBackground": ansi.black,
    // "settings.checkboxBorder": ansi.cyan,
    // "settings.checkboxForeground": ansi.cyan,
    // "settings.dropdownBackground": "#1d1f23",
    // "settings.dropdownBorder": "#181a1f",
    // "settings.dropdownForeground": foreground,
    // "settings.dropdownListBorder": "#454545",
    // "settings.focusedRowBackground": alpha("#292d35", "99"),
    // "settings.focusedRowBorder": alpha(foreground, "00"),
    // "settings.headerBorder": ansi.brightBlack,
    // "settings.headerForeground": ansi.cyan,
    // "settings.modifiedItemIndicator": ansi.yellow,
    // "settings.numberInputBackground": "#1d1f23",
    // "settings.numberInputBorder": alpha(foreground, "10"),
    // "settings.numberInputForeground": foreground,
    // "settings.rowHoverBackground": alpha("#292d35", "4d"),
    // "settings.sashBorder": ansi.brightBlack,
    // "settings.settingsHeaderHoverForeground": alpha(ansi.cyan, "b3"),
    // "settings.textInputBackground": "#1d1f23",
    // "settings.textInputBorder": alpha(foreground, "10"),
    // "settings.textInputForeground": foreground,

    "sideBar.background": background,
    // "sideBar.border": "#232830",
    // "sideBar.dropBackground": alpha("#53595d", "80"),
    "sideBar.foreground": alpha(ansi.brightWhite, "99"),

    "sideBarSectionHeader.background": background,
    // "sideBarSectionHeader.border": null,
    "sideBarSectionHeader.foreground": ansi.brightWhite,

    "sideBarTitle.foreground": foreground,

    // "sideBySideEditor.horizontalBorder": "#181a1f",
    // "sideBySideEditor.verticalBorder": "#181a1f",

    // Status Bar:
    "statusBar.background": background,
    "statusBar.foreground": ansi.brightBlack,
    "statusBar.border": none,
    // "statusBar.focusBorder": "#9da5b4",
    // - debugging:
    "statusBar.debuggingBackground": ansi.magenta,
    // "statusBar.debuggingForeground": ansi.brightWhite,
    // "statusBar.debuggingBorder": ansi.magenta,
    // - no folder (?):
    // "statusBar.noFolderBackground": background,
    // "statusBar.noFolderBorder": ansi.brightBlack,
    // "statusBar.noFolderForeground": "#9da5b4",
    // - offline:
    // "statusBar.offlineBackground": "#6c1717",
    // "statusBar.offlineForeground": "#f8fafd",

    "statusBarItem.activeBackground": alpha(ansi.brightWhite, "ff"),
    // "statusBarItem.focusBorder": "#9da5b4",
    "statusBarItem.hoverBackground": ansi.darkBlack,
    // "statusBarItem.compactHoverBackground": alpha(ansi.brightWhite, "33"),
    // - prominent (?):
    // "statusBarItem.prominentBackground": alpha("#000000", "80"),
    // "statusBarItem.prominentForeground": "#9da5b4",
    // "statusBarItem.prominentHoverBackground": alpha("#000000", "4d"),
    // - remote (?):
    // "statusBarItem.remoteBackground": ansi.blue,
    // "statusBarItem.remoteForeground": "#f8fafd",
    // - statuses:
    "statusBarItem.errorBackground": error,
    "statusBarItem.errorForeground": ansi.brightWhite,
    "statusBarItem.warningBackground": warning,
    "statusBarItem.warningForeground": darkForeground,

    // "symbolIcon.arrayForeground": foreground,
    // "symbolIcon.booleanForeground": foreground,
    // "symbolIcon.classForeground": "#ee9d28",
    // "symbolIcon.colorForeground": foreground,
    // "symbolIcon.constantForeground": foreground,
    // "symbolIcon.constructorForeground": "#b180d7",
    // "symbolIcon.enumeratorForeground": "#ee9d28",
    // "symbolIcon.enumeratorMemberForeground": "#75beff",
    // "symbolIcon.eventForeground": "#ee9d28",
    // "symbolIcon.fieldForeground": "#75beff",
    // "symbolIcon.fileForeground": foreground,
    // "symbolIcon.folderForeground": foreground,
    // "symbolIcon.functionForeground": "#b180d7",
    // "symbolIcon.interfaceForeground": "#75beff",
    // "symbolIcon.keyForeground": foreground,
    // "symbolIcon.keywordForeground": foreground,
    // "symbolIcon.methodForeground": "#b180d7",
    // "symbolIcon.moduleForeground": foreground,
    // "symbolIcon.namespaceForeground": foreground,
    // "symbolIcon.nullForeground": foreground,
    // "symbolIcon.numberForeground": foreground,
    // "symbolIcon.objectForeground": foreground,
    // "symbolIcon.operatorForeground": foreground,
    // "symbolIcon.packageForeground": foreground,
    // "symbolIcon.propertyForeground": foreground,
    // "symbolIcon.referenceForeground": foreground,
    // "symbolIcon.snippetForeground": foreground,
    // "symbolIcon.stringForeground": foreground,
    // "symbolIcon.structForeground": foreground,
    // "symbolIcon.textForeground": foreground,
    // "symbolIcon.typeParameterForeground": foreground,
    // "symbolIcon.unitForeground": foreground,
    // "symbolIcon.variableForeground": "#75beff",

    "tab.activeBackground": ansi.darkBlack,
    // "tab.activeBorder": alpha(ansi.blue, "60"),
    // "tab.activeBorderTop": null,
    "tab.activeForeground": ansi.white,
    // "tab.activeModifiedBorder": "#3399cc",
    "tab.border": alpha(ansi.blue, "66"),
    "tab.hoverBackground": alpha(ansi.blue, "30"),
    // "tab.hoverBorder": null,
    "tab.hoverForeground": alpha(ansi.brightWhite, "80"),
    "tab.inactiveBackground": background,
    "tab.inactiveForeground": ansi.brightBlack,
    // "tab.inactiveModifiedBorder": alpha("#3399cc", "80"),
    // "tab.lastPinnedBorder": "#585858",
    // "tab.unfocusedActiveBackground": "#2c313a",
    // "tab.unfocusedActiveBorder": ansi.brightBlack,
    // "tab.unfocusedActiveBorderTop": null,
    // "tab.unfocusedActiveForeground": alpha(ansi.cyan, "30"),
    // "tab.unfocusedActiveModifiedBorder": alpha("#3399cc", "80"),
    // "tab.unfocusedHoverBackground": alpha(ansi.blue, "18"),
    // "tab.unfocusedHoverBorder": null,
    // "tab.unfocusedHoverForeground": null,
    // "tab.unfocusedInactiveBackground": background,
    // "tab.unfocusedInactiveForeground": alpha(foreground, "80"),
    // "tab.unfocusedInactiveModifiedBorder": alpha("#3399cc", "40"),

    "terminal.ansiBlack": ansi.black,
    "terminal.ansiBlue": ansi.blue,
    "terminal.ansiCyan": ansi.cyan,
    "terminal.ansiGreen": ansi.green,
    "terminal.ansiMagenta": ansi.magenta,
    "terminal.ansiRed": ansi.red,
    "terminal.ansiWhite": ansi.white,
    "terminal.ansiYellow": ansi.yellow,
    "terminal.ansiBrightBlack": ansi.brightBlack,
    "terminal.ansiBrightBlue": ansi.brightBlue,
    "terminal.ansiBrightCyan": ansi.brightCyan,
    "terminal.ansiBrightGreen": ansi.brightGreen,
    "terminal.ansiBrightMagenta": ansi.brightMagenta,
    "terminal.ansiBrightRed": ansi.brightRed,
    "terminal.ansiBrightWhite": ansi.brightWhite,
    "terminal.ansiBrightYellow": ansi.brightYellow,
    "terminal.background": background,
    // "terminal.border": ansi.brightBlack,
    // "terminal.dropBackground": alpha("#53595d", "80"),
    // "terminal.findMatchBackground": alpha(ansi.blue, "60"),
    // "terminal.findMatchBorder": null,
    // "terminal.findMatchHighlightBackground": "#314365",
    // "terminal.findMatchHighlightBorder": null,
    "terminal.foreground": foreground,
    // "terminal.hoverHighlightBackground": alpha("#264f78", "20"),
    // "terminal.inactiveSelectionBackground": alpha("#677696", "30"),
    "terminal.selectionBackground": selectionBackground,
    "terminal.selectionForeground": selectionForeground,
    // "terminal.tab.activeBorder": alpha(ansi.blue, "60"),

    // "terminalCommandDecoration.defaultBackground": alpha(ansi.brightWhite, "40"),
    // "terminalCommandDecoration.errorBackground": "#f14c4c",
    // "terminalCommandDecoration.successBackground": "#1b81a8",

    // "terminalCursor.background": null,
    // "terminalCursor.foreground": null,

    // "terminalOverviewRuler.cursorForeground": alpha("#a0a0a0", "cc"),
    // "terminalOverviewRuler.findMatchForeground": alpha("#d18616", "7e"),

    // "testing.iconErrored": error,
    // "testing.iconFailed": error,
    // "testing.iconPassed": success,
    // "testing.iconQueued": warning,
    // "testing.iconSkipped": disabled,
    // "testing.iconUnset": disabled,
    // "testing.message.error.decorationForeground": error,
    // "testing.message.error.lineBackground": alpha(error, "33"),
    // "testing.message.info.decorationForeground": alpha(info, "80"),
    // "testing.message.info.lineBackground": null,
    // "testing.peekBorder": ansi.magenta,
    // "testing.peekHeaderBackground": alpha(ansi.magenta, "1a"),
    // "testing.runAction": "#73c991",

    // "textBlockQuote.background": alpha("#7f7f7f", "1a"),
    // "textBlockQuote.border": alpha("#007acc", "80"),

    // "textCodeBlock.background": alpha("#0a0a0a", "66"),

    "textLink.activeForeground": ansi.brightCyan,
    "textLink.foreground": ansi.cyan,

    // "textPreformat.foreground": "#d7ba7d",

    // "textSeparator.foreground": alpha(ansi.brightWhite, "2e"),

    "titleBar.activeBackground": chroma
      .mix(background, ansi.green, 0.125, "lch")
      .hex(),
    "titleBar.activeForeground": ansi.brightGreen,
    "titleBar.border": none,
    // "titleBar.inactiveBackground": alpha(ansi.black, "80"),
    // "titleBar.inactiveForeground": "#6b717d",

    "toolbar.activeBackground": alpha(ansi.red, "66"),
    "toolbar.hoverBackground": alpha(ansi.red, "33"),
    "toolbar.hoverOutline": null,

    // "tree.inactiveIndentGuidesStroke": alpha("#585858", "66"),
    // "tree.indentGuidesStroke": "#585858",
    // "tree.tableColumnsBorder": alpha("#cccccc", "20"),
    // "tree.tableOddRowsBackground": alpha(foreground, "0a"),

    // "walkThrough.embeddedEditorBackground": alpha("#000000", "66"),
    // "walkthrough.stepTitle.foreground": ansi.brightWhite,

    "welcomePage.background": alpha(ansi.black, "33"),
    "welcomePage.progress.background": ansi.black,
    "welcomePage.progress.foreground": ansi.cyan,
    // TODO: apply box styles
    "welcomePage.tileBackground": boxBackground,
    "welcomePage.tileBorder": boxBorder,
    "welcomePage.tileHoverBackground": boxHoverBackground,

    "widget.border": widgetBorder,
    "widget.shadow": widgetShadow,

    // "window.activeBorder": null,
    // "window.inactiveBorder": null,
  };
};
